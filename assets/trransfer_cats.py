import json

# Завантаження даних з файлу cats.json
with open('cats.json', 'r', encoding='utf-8') as f:
    cats_array = json.load(f)

# Фільтрація масиву
filtered_array = [item for item in cats_array if item['parent_id'] == 0]

# Збереження відфільтрованих даних у файл main_cats.json
with open('main_cats.json', 'w', encoding='utf-8') as f:
    json.dump(filtered_array, f, ensure_ascii=False, indent=4)

print("Фільтрація завершена. Дані збережено у файл main_cats.json.")
