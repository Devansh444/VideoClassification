import requests

api_key = "2oOTPZOBzkE9MPeVDNwY"
model_id = "exercise-detection-crmtf/1"
image_path = "pushupsss.webp"

url = f"https://detect.roboflow.com/{model_id}?api_key={api_key}"

with open(image_path, "rb") as img_file:
    response = requests.post(url, files={"file": img_file})

# Print the result
print(response.json())
