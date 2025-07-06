import requests
import json

API_URL = "http://localhost:3001/api/produtos"

def rename_product(old_name, new_name):
    try:
        # 1. Fetch all products
        response = requests.get(API_URL)
        response.raise_for_status()
        products = response.json()

        product_to_rename = None
        for product in products:
            if 'name' in product and product['name'] == old_name:
                product_to_rename = product
                break

        if not product_to_rename:
            print(f"Product '{old_name}' not found in the database.")
            return

        product_id = product_to_rename['id']

        # Prepare data for update
        update_data = {
            "name": new_name,
            "description": product_to_rename.get('description', ''),
            "image": product_to_rename.get('image', ''),
            "price": product_to_rename.get('price'),
            "desconto": product_to_rename.get('desconto'),
            "stars": product_to_rename.get('stars'),
            "details": product_to_rename.get('details'),
            "info": product_to_rename.get('info'),
            "nome": product_to_rename.get('nome'),
            "freeShipping": product_to_rename.get('freeShipping', False)
        }

        update_url = f"{API_URL}/{product_id}"
        try:
            update_response = requests.put(update_url, headers={"Content-Type": "application/json; charset=utf-8"}, data=json.dumps(update_data).encode('utf-8'))
            update_response.raise_for_status()
            print(f"Successfully renamed product ID {product_id}: '{old_name}' -> '{new_name}'")
        except requests.exceptions.RequestException as e:
            print(f"Error renaming product {old_name} (ID: {product_id}): {e}")
            if hasattr(e, 'response') and e.response is not None:
                print(f"Response status code: {e.response.status_code}")
                print(f"Response content: {e.response.text}")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching products: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response status code: {e.response.status_code}")
            print(f"Response content: {e.response.text}")

if __name__ == "__main__":
    rename_product("Novo Notebook Incrível", "Acer Aspire")
