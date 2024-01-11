from django.urls import path

from ..users import views

urlpatterns = [
    path(
        'login/',
        views.LoginTemplateView.as_view(),
        name='login_template',
    ),
    path('logout/', views.LogoutView.as_view(), name='logout'),
]
