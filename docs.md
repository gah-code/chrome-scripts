Certainly! Here's a formatted version for a Markdown (.md) file:

### Data Importer ACS AEM Documentation

To use the Data Importer ACS AEM tool for tagging pages, follow these steps:

1. Create an Excel file with two columns: `path` and `cq:tags`.
2. In the `path` column, input the paths of the pages to be tagged.
3. In the `cq:tags` column, list the tags for each page separated by commas.
   Example:

   ```plaintext
   | path                 | cq:tags                        |
   |----------------------|--------------------------------|
   | /content/page1       | tag:Science, tag:Biology        |
   | /content/page2       | tag:Math, tag:Algebra           |
   | /content/page3       | tag:History, tag:World          |
   ```

4. Save the Excel file and upload it in the "Spreadsheet" field of the Data Importer tool.
5. Set "Mode" to "Update" and "Update Method" to "Merge".
6. Ensure "Process Definition" is set to "Generic Excel Importer".
7. Click "Start Process" to begin the tagging operation.

**Note:** Ensure that tags already exist in AEM for the tool to apply them.

### Sling Code for Tagging Operation

Under the hood, the Sling code for this operation will look something like this:

```java
public void addTags(ResourceResolver resolver, String path, String[] tags) {
    Resource resource = resolver.getResource(path);
    if (resource != null) {
        ModifiableValueMap properties = resource.adaptTo(ModifiableValueMap.class);
        if (properties != null) {
            properties.put("cq:tags", tags);
            try {
                resolver.commit();
            } catch (PersistenceException e) {
                e.printStackTrace();
            }
        }
    }
}
```

This Java code uses the Apache Sling API to add or update `cq:tags` property for a given page path.

---

### Redirect Manager ACS AEM Documentation

To import redirects in bulk using the Redirect Manager ACS AEM tool, follow these steps:

1. Create an Excel file with three columns: `Source URL`, `Target URL`, and `Status Code`.
2. In the `Source URL` column, input paths to be redirected.
3. In the `Target URL` column, input target paths for redirection.
4. In the `Status Code` column, input HTTP status codes (e.g., 301 for permanent, 302 for temporary).
   Example:

   ```plaintext
   | Source URL   | Target URL   | Status Code   |
   |--------------|--------------|---------------|
   | /old-page    | /new-page     | 301           |
   | /old-page-2  | /new-page-2   | 302           |
   ```

5. Save the Excel file and upload it in the "Spreadsheet" field of the Redirect Manager tool.
6. Set "Mode" to "Update" and "Update Method" to "Merge".
7. Ensure "Process Definition" is set to "Generic Excel Importer".
8. Click "Start Process" to begin the import operation.

**Note:** Ensure that source URLs exist in AEM for the tool to apply redirects correctly.

### Additional Notes on Redirects

- Both `Source URL` and `Status Code` are mandatory for Redirect Manager ACS AEM tool.
- Applying both "Source URL" and "Status Code" is mandatory when using the Redirect Manager ACS AEM tool. The "Source URL" is necessary to specify which URL is to be redirected, and the "Status Code" is needed to indicate the type of redirect, such as 301 for a permanent redirect and 302 for a temporary redirect.
- Example: Redirecting to a specific location within a page using a hashtag (`#`) in the `Target URL`.

  ```plaintext
  | Source URL   | Target URL         | Status Code   |
  |--------------|--------------------|---------------|
  | /old-page    | /new-page#section1 | 301           |
  ```

- Example: Redirecting pages based on the region.

  ```plaintext
  | Source URL     | Target URL   | Status Code   |
  |----------------|--------------|---------------|
  | /us-old-page   | /us-new-page  | 301           |
  | /uk-old-page   | /uk-new-page  | 302           |
  ```

---

```markdown
# Sample Table Data Format for Renovator XLSX Spreadsheet

Below is a sample table data format for the XLSX spreadsheet when performing multiple moves or renames using Renovator:

| Source             | Destination            |
| ------------------ | ---------------------- |
| /content/page1     | /content/new-location1 |
| /content/page2     | /content/new-location2 |
| /content/folder1   | /content/new-folder1   |
| /content/folder2   | /content/new-folder2   |
| /images/image1.jpg | /images/new-image1.jpg |
| /images/image2.jpg | /images/new-image2.jpg |

**In this example:**

- The first row specifies the column headers "Source" and "Destination."

- Each subsequent row represents a move or rename operation.

- Multiple sources can be listed with the same destination, indicating the merging of folders.

- It's essential to avoid moving the same source folder to multiple destinations.

**Usage Instructions:**

1. **Create a new spreadsheet in XLSX format.**
2. **Set the first row with "Source" and "Destination" as headers.**
3. **Add rows for each move, specifying the source and destination.**
4. **Save the file as an XSLX spreadsheet and close Excel.**
5. **In the Renovator tool, leave source and destination blank and provide the spreadsheet for the "Multiple Moves" field.**
6. **Configure other fields as needed.**
7. **Perform a dry run to validate the file and preview affected items.**
8. **Click "Start Process" to execute the multiple moves or renames.**

Adjust the source and destination paths based on your AEM repository structure and the specific moves or renames you want to perform.
```

```plaintext
| Source             | Destination              |
|--------------------|--------------------------|
| /content/page1     | /content/new-location1   |
| /content/page2     | /content/new-location2   |
| /content/folder1   | /content/new-folder1     |
| /content/folder2   | /content/new-folder2     |
| /images/image1.jpg | /images/new-image1.jpg   |
| /images/image2.jpg | /images/new-image2.jpg   |
```

In this example:

- The first row specifies the column headers "Source" and "Destination."

- Each subsequent row represents a move or rename operation.

- Multiple sources can be listed with the same destination, indicating the merging of folders.

- It's essential to avoid moving the same source folder to multiple destinations.

Save this table data as an XLSX spreadsheet and use it in the Renovator tool following the steps mentioned in the documentation:

1. **Create a new spreadsheet in XLSX format.**
2. **Set the first row with "Source" and "Destination" as headers.**
3. **Add rows for each move, specifying the source and destination.**
4. **Save the file as an XSLX spreadsheet and close Excel.**
5. **In the Renovator tool, leave source and destination blank and provide the spreadsheet for the "Multiple Moves" field.**
6. **Configure other fields as needed.**
7. **Perform a dry run to validate the file and preview affected items.**
8. **Click "Start Process" to execute the multiple moves or renames.**
