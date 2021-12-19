## RaiD Yolov5 inference script
from glob import glob
import torch


def predict(modelpath: str, test_images: list):
    """
    Run inference with the yolov5 model
    """
    model = torch.hub.load("ultralytics/yolov5", "custom", path=modelpath, force_reload=True)
    # Inference
    results = model(test_images)
    results.print() # prints the defects on each image
    results.save() # Store image with bboxes highlighting defects


if __name__=="__main__":
    # Load trained Model weights
    MODEL_PATH = "/content/drive/MyDrive/final_year_project/raid/best.pt" # do away with static path naming
    # Test image batch
    IMAGES = glob("/content/drive/MyDrive/final_year_project/raid/test_images/*.jpg")

    predict(MODEL_PATH, IMAGES)
    
