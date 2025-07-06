import requests
import json

API_URL = "http://localhost:3001/api/produtos"

def parse_price_to_float(price_string):
    if price_string is None or price_string == '':
        return 0.0 # Default to 0.0 if price is None or empty, as it's allowNull: false
    if isinstance(price_string, (int, float)):
        return float(price_string)
    try:
        return float(price_string.replace('R$ ', '').replace('.', '').replace(',', '.'))
    except ValueError:
        print(f"Warning: Could not parse price string '{price_string}'. Defaulting to 0.0.")
        return 0.0

def update_product_details():
    try:
        response = requests.get(API_URL)
        response.raise_for_status()
        products = response.json()

        print(f"Found {len(products)} products in the database.")

        for product in products:
            original_name = product.get('name', '')
            original_description = product.get('description', '')
            product_id = product.get('id')

            if not original_name or not product_id:
                print(f"Skipping product with missing name or ID: {product}")
                continue

            words = original_name.split()

            new_name = original_name
            new_description = original_description

            if len(words) > 4:
                new_name = " ".join(words[:3])
                remaining_words = " ".join(words[3:])
                
                if new_description:
                    new_description += " " + remaining_words
                else:
                    new_description = remaining_words

                if new_description and len(new_description) > 250:
                    new_description = new_description[:247] + "..."

            update_data = {
                "name": new_name,
                "description": new_description if new_description is not None else "",
                "image": product.get('image', ''),
                "price": parse_price_to_float(product.get('price')),
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
                if len(words) > 4:
                    print(f"Updated product ID {product_id}: '{original_name}' -> '{new_name}'. Added '{remaining_words}' to description.")
                else:
                    print(f"Product '{original_name}' (ID: {product_id}) has 4 or fewer words, no change needed.")
            except requests.exceptions.RequestException as e:
                print(f"Error updating product {original_name} (ID: {product_id}): {e}")
                if hasattr(e, 'response') and e.response is not None:
                    print(f"Response status code: {e.response.status_code}")
                    print(f"Response content: {e.response.text}")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching products: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response status code: {e.response.status_code}")
            print(f"Response content: {e.response.text}")

if __name__ == "__main__":
    update_product_details()