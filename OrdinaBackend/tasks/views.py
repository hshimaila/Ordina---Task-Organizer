from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer
from datetime import datetime, timedelta

# GET all tasks (user-specific)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_tasks(request):
    tasks = Task.objects.filter(user=request.user).order_by('-created_at')
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

# CREATE task
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_task(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

# UPDATE task
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_task(request, pk):
    task = Task.objects.get(id=pk, user=request.user)
    serializer = TaskSerializer(task, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

# DELETE task
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_task(request, pk):
    task = Task.objects.get(id=pk, user=request.user)
    task.delete()
    return Response({'message': 'Deleted'})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def task_stats(request):
    user = request.user

    tasks = Task.objects.filter(user=user)

    total = tasks.count()
    completed = tasks.filter(completed=True).count()

    # 🔥 SIMPLE STREAK LOGIC (basic version)
    streak = 0
    today = datetime.today().date()

    for i in range(7):  # last 7 days
        day = today - timedelta(days=i)
        if tasks.filter(completed=True, updated_at__date=day).exists():
            streak += 1
        else:
            break

    return Response({
        "total": total,
        "completed": completed,
        "streak": streak
    })