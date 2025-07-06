import requests
import json
import os
import random

url = "http://localhost:3001/api/produtos"

headers = {
    "Content-Type": "application/json"
}

# Path to your product images directory
image_dir = "C:/Users/Rimau/Downloads/projeto_final_fullstack_grupo_3/backend/uploads/produtos"

# Generic descriptions and prices
descriptions = [
    "Produto de alta qualidade e durabilidade.",
    "Excelente para uso diário, com design moderno.",
    "Performance superior para suas tarefas mais exigentes.",
    "Inovação e tecnologia ao seu alcance.",
    "Conforto e eficiência combinados em um só produto."
]

def generate_random_price():
    return f"R$ {random.uniform(50.0, 2500.0):.2f}".replace('.', ',')

products_to_register = []
for filename in os.listdir(image_dir):
    if os.path.isfile(os.path.join(image_dir, filename)):
        name = os.path.splitext(filename)[0] # Remove extension for product name
        product_data = {
            "name": name,
            "description": random.choice(descriptions),
            "image": filename, # Use the full filename for the image field
            "price": generate_random_price(),
            "promotionalPrice": None # No promotional price by default
        }
        products_to_register.append(product_data)

print(f"Attempting to register {len(products_to_register)} products from images...")

for product in products_to_register:
    try:
        response = requests.post(url, headers=headers, data=json.dumps(product))
        response.raise_for_status()
        print(f"Successfully registered: {product['name']}")
    except requests.exceptions.RequestException as e:
        print(f"Error registering {product['name']}: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response content: {e.response.text}")
