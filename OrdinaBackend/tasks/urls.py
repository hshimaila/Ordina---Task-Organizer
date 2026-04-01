from django.urls import path
from .views import get_tasks, create_task, update_task, delete_task, task_stats

urlpatterns = [
    path('', get_tasks),
    path('create/', create_task),
    path('<int:pk>/', update_task),
    path('<int:pk>/delete/', delete_task),
    path('stats/', task_stats),
]