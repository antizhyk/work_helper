import json

# Завантаження даних з файлів
with open('cats.json', 'r', encoding='utf-8') as f:
    cats = json.load(f)

with open('../public/product.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

# Створення словника для швидкого доступу до категорій за їх id
cats_dict = {cat['id']: cat for cat in cats}

# Оновлення категорій у продуктах
for product in products:
    new_cats = []
    for cat_id in product.get('cats', []):
        cat = cats_dict.get(cat_id)
        if cat and cat['parent_id'] > 0:
            new_cats.append(cat['parent_id'])
        new_cats.append(cat_id)
    product['cats'] = list(set(new_cats))  # Уникнення дублювання id

# Збереження оновлених даних у файл product_new.json
with open('product_new.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=4)

print("Дані успішно оновлено та збережено у файл product_new.json.")
