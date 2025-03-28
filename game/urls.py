from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name='game/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='game/logged_out.html'), name='logout'),
    path('leaderboard/', views.leaderboard, name='leaderboard'),
    path('profile/<int:user_id>/', views.user_profile, name='user_profile'),
]
