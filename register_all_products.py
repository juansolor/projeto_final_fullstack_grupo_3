import requests
import json
import random

url = "http://localhost:3001/api/produtos"

headers = {
    "Content-Type": "application/json"
}

ofertasFallback = [
  "Auragear-produto2.jpg", "Auragear-produto3.jpg", "Aureagerar-produto1.jpg", "Auragear-logo.jpg",
  "Byteware-produto1.jpg", "Byteware-produto2.jpg", "Byteware-produto3.jpg", "Bytewave - logo.jpg",
  "gamerlink-produto.jpg", "gamerlink-logo.jpg",
  "NexaCore - produto1.jpg", "NexaCore - produto2.jpg", "NexaCore-produto3.jpg", "NexaCore-produto4.jpg", "NexaCore - logo.jpg",
  "optiview-produto1.jpg", "optiview-produto2.jpg", "optiview-produto3.jpg", "optiview-logo.jpg",
  "PeriTech-produto1.jpg", "PeriTech-produto2.jpg", "PeriTech-logo.jpg",
  "Quanttum-produto1.jpg", "Quanttum-produto2.jpg", "quanttum-produto3.jpg", "quanttum-logo.jpg",
  "soundpulse-produto1.jpg", "soundpulse-logo.jpg",
  "e-commerce.jpg", "logo.png"
]

titulos = [
  "Headset Gamer", "Mouse Óptico", "Teclado Mecânico", "Webcam HD", "Monitor LED", "Impressora Wi-Fi", "Caixa de Som Bluetooth", "Notebook Pro", "SSD Externo", "Placa de Vídeo", "Memória RAM", "Hub USB", "Microfone Condensador", "Cadeira Gamer", "Roteador Wi-Fi", "Smartwatch", "Tablet 10''", "Fone Bluetooth", "Carregador Turbo", "HD Externo", "Teclado Numérico", "Mousepad RGB", "Adaptador HDMI", "Controle Wireless", "Pen Drive 64GB", "Câmera de Segurança", "Projetor Portátil", "Estabilizador", "Fonte ATX"
]

descricoes = [
  "Produto de alta qualidade para gamers exigentes.",
  "Ideal para trabalho e lazer, com design moderno.",
  "Tecnologia de ponta e máxima performance.",
  "Compatível com diversos dispositivos.",
  "Garantia de 1 ano e suporte nacional."
]

descontos = ["10% Desconto", "15% Desconto", "20% Desconto", "25% Desconto", "30% Desconto", "35% Desconto", "40% Desconto", "45% Desconto", "50% Desconto"]

def random_from(arr):
  return random.choice(arr)

produtos_to_register = []
for idx, img_name in enumerate(ofertasFallback):
    original_price_float = round(random.uniform(100, 2000), 2)
    discount_string = random_from(descontos)
    discount_percentage = float(discount_string.replace('% Desconto', ''))

    promotional_price_float = None
    if not isinstance(discount_percentage, float) or discount_percentage > 0:
        promotional_price_float = original_price_float * (1 - discount_percentage / 100)

    product_data = {
        "name": titulos[idx % len(titulos)],
        "description": random_from(descricoes),
        "image": img_name, # Use the raw image name here
        "price": f"R$ {original_price_float:.2f}".replace('.', ','),
        "promotionalPrice": f"R$ {promotional_price_float:.2f}".replace('.', ',') if promotional_price_float is not None else None
    }
    produtos_to_register.append(product_data)

print(f"Attempting to register {len(produtos_to_register)} products...")

for product in produtos_to_register:
    try:
        response = requests.post(url, headers=headers, data=json.dumps(product))
        response.raise_for_status()
        print(f"Successfully registered: {product['name']}")
    except requests.exceptions.RequestException as e:
        print(f"Error registering {product['name']}: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response content: {e.response.text}")

