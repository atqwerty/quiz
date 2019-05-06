from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
# from .models import TaskList, Task
# from .serializers import TaskListSerializer, TaskSerializer
from django.core.serializers import serialize
import json
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from django.shortcuts import render
from rest_framework.views import APIView
from .models import Post
from rest_framework.response import Response
from .serializers import PostSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class Posts(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        data = Post.objects.create(title = request.data[0], body = request.data[1], like_count = request.data[2], created_at = request.data[3])
        return Response(data)

    def get(self, request):
        data = Post.objects.all()
        serializer = PostSerializer(data, many = True)
        return Response(serializer.data)

class SinglePost(APIView):
    permission_classes = (IsAuthenticated,)
    def get(delf, request, post_id):
        data = Post.objects.all()
        serializer = PostSerializer(data, many = True)
        
        for post in serializer.data:
            if post_id == post['id']: return Response(post)

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    username = request.data[0]
    password = request.data[1]
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},
                    status=HTTP_200_OK)

