"""
URL configuration for werds4nerds project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from game import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),  # Change index to home
    path('game/', include('game.urls')),
    path('register/', views.register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name='game/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='game/logged_out.html'), name='logout'),
    path('leaderboard/', views.leaderboard, name='leaderboard'),
    path('profile/<int:user_id>/', views.user_profile, name='user_profile'),
    path('game/', views.games_page, name='games_page'),
    path('games/', views.game_view, name='game'),
]
