import json

# Завантаження даних з файлів
with open('full_data.json', 'r', encoding='utf-8') as f:
    source_array = json.load(f)

with open('../public/product.json', 'r', encoding='utf-8') as f:
    target_array = json.load(f)

# Функція для перенесення cats
def transfer_cats(source, target):
    source_dict = {item['id']: item for item in source}
    for target_item in target:
        source_item = source_dict.get(target_item['id'])
        if source_item and 'cats' in source_item:
            target_item['cats'] = source_item['cats']

# Перенесення cats
transfer_cats(source_array, target_array)

# Збереження оновлених даних у файл product_new.json
with open('product_new.json', 'w', encoding='utf-8') as f:
    json.dump(target_array, f, ensure_ascii=False, indent=4)

print("Дані успішно перенесено та збережено у файл product_new.json.")
