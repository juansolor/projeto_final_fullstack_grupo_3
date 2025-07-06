import requests
import json

API_URL = "http://localhost:3001/api/produtos"

def delete_product_by_name(product_name):
    try:
        # 1. Fetch all products
        response = requests.get(API_URL)
        response.raise_for_status()
        products = response.json()

        product_to_delete = None
        for product in products:
            if 'name' in product and product['name'] == product_name:
                product_to_delete = product
                break

        if not product_to_delete:
            print(f"Product '{product_name}' not found in the database.")
            return

        # 2. Send DELETE request for the identified product
        delete_url = f"{API_URL}/{product_to_delete['id']}"
        try:
            delete_response = requests.delete(delete_url)
            delete_response.raise_for_status()
            print(f"Successfully deleted product: {product_to_delete['name']} (ID: {product_to_delete['id']})")
        except requests.exceptions.RequestException as e:
            print(f"Error deleting product {product_to_delete['name']} (ID: {product_to_delete['id']}): {e}")
            if hasattr(e, 'response') and e.response is not None:
                print(f"Response content: {e.response.text}")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching products: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response content: {e.response.text}")

if __name__ == "__main__":
    delete_product_by_name("Notebook Pro")
