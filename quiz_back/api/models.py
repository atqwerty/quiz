from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length = 50)
    body = models.TextField(max_length = 50)
    like_count = models.IntegerField
    created_at = models.DateTimeField("created at")
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)