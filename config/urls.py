from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app.core.urls')),
    path('users/', include('app.users.urls')),
]
