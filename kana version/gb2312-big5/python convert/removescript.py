def remove_brackets(input_file, output_file):
    try:
        # Open the input file for reading with 'utf-8' encoding
        with open(input_file, 'r', encoding='utf-8') as input_file_handle:
            # Read the content of the input file
            content = input_file_handle.read()

            # Remove '[' and ']' characters from the content
            modified_content = content.replace('[', '').replace(']', '')

            # Open the output file for writing with 'utf-8' encoding
            with open(output_file, 'w', encoding='utf-8') as output_file_handle:
                # Write the modified content to the output file
                output_file_handle.write(modified_content)

        print(f"Successfully removed '[' and ']' characters from {input_file} and saved to {output_file}")

    except FileNotFoundError:
        print(f"File '{input_file}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    input_file = "python convert\input.txt"  # Replace with the path to your input file
    output_file = "python convert\output.txt"  # Replace with the path for the output file

    remove_brackets(input_file, output_file)
