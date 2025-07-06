import requests
import json
import random

API_URL = "http://localhost:3001/api/produtos"

def generate_random_price_float():
    return round(random.uniform(100.0, 5000.0), 2)

def parse_price_to_float(price_string):
    if price_string is None or price_string == '':
        return 0.0
    if isinstance(price_string, (int, float)):
        return float(price_string)
    try:
        return float(price_string.replace('R$ ', '').replace('.', '').replace(',', '.'))
    except ValueError:
        return 0.0

def update_product_prices():
    try:
        response = requests.get(API_URL)
        response.raise_for_status()
        products = response.json()

        print(f"Found {len(products)} products in the database.")

        for product in products:
            product_id = product.get('id')
            original_name = product.get('name', '')

            if not product_id:
                print(f"Skipping product with missing ID: {product}")
                continue

            new_price_float = generate_random_price_float()

            update_data = {
                "name": product.get('name', ''),
                "description": product.get('description', ''),
                "image": product.get('image', ''),
                "price": new_price_float,
                "desconto": product.get('desconto'),
                "stars": product.get('stars'),
                "details": product.get('details'),
                "info": product.get('info'),
                "nome": product.get('nome'),
                "freeShipping": product.get('freeShipping', False)
            }

            update_url = f"{API_URL}/{product_id}"
            try:
                update_response = requests.put(update_url, headers={"Content-Type": "application/json; charset=utf-8"}, data=json.dumps(update_data).encode('utf-8'))
                update_response.raise_for_status()
                print(f"Updated price for product ID {product_id} ('{original_name}'): R$ {new_price_float:.2f}")
            except requests.exceptions.RequestException as e:
                print(f"Error updating price for product {original_name} (ID: {product_id}): {e}")
                if hasattr(e, 'response') and e.response is not None:
                    print(f"Response status code: {e.response.status_code}")
                    print(f"Response content: {e.response.text}")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching products: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response status code: {e.response.status_code}")
            print(f"Response content: {e.response.text}")

if __name__ == "__main__":
    update_product_prices()
