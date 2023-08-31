# Define the original text
original_text = """
(
    "愛欲", "愛慾", "",
    "安逸", "安佚", "",
    "暗影", "暗翳", "",
    "暗唱", "暗誦", "諳誦",
    "案分", "按分", "",
    "暗夜", "闇夜", "",
    "意向", "意嚮", "",
    "慰謝料", "慰藉料", "",
    "衣装", "衣裳", "",
    "遺跡", "遺蹟", "",
    "一丁", "一挺", "",
    "陰影", "陰翳", "",
    "英知", "叡智", "",
    "英才", "叡才", "",
    "園地", "苑地", "",
    "憶説", "臆説", "",
    "憶測", "臆測", "",
)
"""

# Split the original text into lines
lines = original_text.strip().split("\n")

# Initialize an empty dictionary to store modified key-value pairs
modified_pairs = {}

# Process each line and make the desired changes
for i in range(0, len(lines), 3):
    key = lines[i].strip()
    value = lines[i + 1].strip()
    
    # Remove double quotes around the key and value
    key = key.replace('"', '')
    value = value.replace('"', '')
    
    # If there's a non-empty value, add it to the modified_pairs dictionary
    if value:
        modified_pairs[key] = value

# Create the modified text
modified_text = "{\n" + ",\n".join([f'    "{key}": "{value}"' for key, value in modified_pairs.items()]) + "\n}"

# Print the modified text
print(modified_text)
