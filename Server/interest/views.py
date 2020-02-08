from rest_framework.views import APIView
from rest_framework.response import Response


from .models import Interest
from .serializers import InterestSerializer


class InterestView(APIView):
    def get(self, request):
        interests = Interest.objects.all()
        serializer = InterestSerializer(interests, many=True)

        return Response({"interests": serializer.data})
