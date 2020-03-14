from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet)
urlpatterns = router.urls





# from django.urls import path

# from .views import (
#     ArticleListView, 
#     ArticleDetailView,
#     ArticleCreateView,
#     ArticleDeleteView
# )


# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('create/', ArticleCreateView.as_view()),
#     path('<pk>', ArticleDetailView.as_view()),
#     path('<pk>/delete/', ArticleDeleteView.as_view())
# ]