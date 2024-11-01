# 📜 Script Description
This is a small javascript application to help me edit the pro evolution soccer 2021 video game.
It simply helps me find the players that I am missing to edit in the game.
The .csv file can be obtained using the pes 2021 editor tool by ejogc327.
This Node.js script compares file names in a directory with data from a column in a CSV file. It filters out names that don’t match and saves them to a text file.

## 🔍 What Does This Script Do?

1. **Reads a CSV file (`a.csv`)** and extracts the data from the first column, storing it in an array (`dataCSVArray`).
2. **Reads file names in the `minifaces` folder** and extracts only the base names (without extensions), storing them in another array (`filesCarpetArray`).
3. **Filters out unique values** that are in the CSV but not in the directory.
4. **Writes these unique values to a text file** named `miniFacesToDo.txt` to indicate which items from the CSV have no match in the `minifaces` folder.

## 🛠️ How to Use the Script

1. Place the CSV file (`a.csv`) in the same directory as the script and ensure that the `minifaces` folder contains the files you want to compare.
2. Run the script with the following command:
   ```bash
   node script.js
   ```
3. After running, you’ll find a file called `miniFacesToDo.txt` that contains the names in the CSV that have no match in the `minifaces` directory.

## 📦 Dependencies

This script uses the following Node.js modules:
- **fs**: for file operations.
- **csv-parse**: for reading and parsing CSV files.
- **path**: for handling file and directory paths.

## ✨ Example

Imagine you have `a.csv` with the following names:
```
file1
file2
file3
```
And in the `minifaces` folder, you only have `file1.jpg` and `file3.png`. After running the script, `miniFacesToDo.txt` will contain:
```
file2
```
since `file2` was in the CSV but not in the `minifaces` directory.

## 📧 Contact
qulr4p4s@anonaddy.me
For any questions or suggestions, feel free to reach out!
