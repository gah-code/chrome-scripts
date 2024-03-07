Bulk Page Movement Using the Renovator Tool
This tool was useful for this task, as the diagram provides an overview.

## Work Flow

|
|---[Identify pages current source in incorrect locations]
|
v
Pages in Incorrect Locations
|
|---[Sorts pages into batches]
|
v
Sorted Pages
|
|---[Moves pages to target locations]
|
v
Pages in Correct Locations

Bulk move pages from multiple different folders and locations:

In your Excel file, create two columns: Source Path and Destination Path.
In the Source Path column, input the paths of the pages that you want to move.
In the Destination Path column, input the target paths where you want to move the source pages to. For example:
| Source Path | Destination Path |
|---------------------------|-----------------------------|
| /content/folder1/page1 | /content/folder2/page1 |
| /content/folder3/page2 | /content/folder4/page2 |
| /content/folder5/page3 | /content/folder6/page3 |

Save this Excel file and upload it in the "Spreadsheet" field of the Renovator tool.
Set the "Operation" field to "Move".
Click "Start Process" to begin the operation.
Please ensure that the source paths exist in AEM for the tool to move the pages correctly.

To verify that the page was successfully moved, you can navigate to the destination path where you moved the page to. If the page appears there with all of its content intact, this confirms that the move operation was successful. You can also check the source path to verify that the page no longer exists there. Additionally, you can verify the operation in the AEM logs where all move operations are logged.

Always double-check the paths of the pages that you are moving or renaming to ensure accuracy.
Make sure all tags, links, and page titles are updated accordingly after any page move or rename operation.
When moving pages to a folder for deletion, be clear that any important content is not mistakenly included, as this will also be deleted.
Always review the changes after operations to verify that everything worked as expected.
Use the "Run Dry" option for a test run before performing actual changes, especially for large or critical operations.
If you're using the "Create versions" option, be aware that it might consume more storage space in your AEM instance.
Note: The "Run Dry" option indicates whether the tool should perform a "dry run" or not. If "Run Dry" is checked, the tool will simulate the operation without actually performing any changes. This can be useful for testing the operation and ensuring everything works as expected. If "Run Dry" is unchecked, the tool will perform the operation and make actual changes.

Renaming Operations
In your Excel file, create two columns: Source Path and Destination Path.
In the Source Path column, input the paths of the pages that you want to rename.
In the Destination Path column, input the new paths with the new names that you want for the pages. For example:
| Source Path | Destination Path |
|------------------------------------|------------------------------------|
| /content/folder1/old-page-name | /content/folder1/new-page-name |
| /content/folder2/old-page-name | /content/folder2/new-page-name |
| /content/folder3/old-page-name | /content/folder3/new-page-name |

Important: Keep in mind that renaming a page will change its URL. If you want to keep the page's name as is, you don't need to do anything. The page's name will remain the same unless it's changed using the Renovator tool or another method.

Note: The "Create versions" option allows you to create a new version of each page before performing the operation. This can be useful for keeping a backup of the original pages in case you need to revert the changes. If "Create versions" is checked, a new version will be created for each page before the operation. If "Create versions" is unchecked, no new versions will be created.

Relocate and Deletion Operation
In the Destination Path column, input the target paths where you want to move the source pages to. The target paths should be within the folder that you plan to delete later. For example:

Source Path Destination Path
| Source Path | Destination Path |
|---------------------------------|-----------------------------------------|
| /content/folder1/blog-page1 | /content/temporary-folder/blog-page1 |
| /content/folder2/page2 | /content/temporary-folder/page2 |
| /content/folder3/page3 | /content/temporary-folder/page3 |

Note: After you have moved the pages into the temporary folder, you can delete this folder at any time, which will also delete all the pages within it.

Process dialog
For any process listed in the process manager, you can click on it to bring up a dialog with additional information.

!https://adobe-consulting-services.github.io/acs-aem-commons/features/mcp/images/process-dialog-running.png

This dialog shows the initiator and start time of the process, along with its completion status and percentage. If a report was generated from the process, it can also be accessed here.

Viewing a report
Once a reporting process has completed, it stores any reporting information generated. From the process dialog you are presented with two options:

!https://adobe-consulting-services.github.io/acs-aem-commons/features/mcp/images/process-dialog-completed.png

Checking out a report
Once a reporting process is done, it stores any info it generated. From the process dialog, you've got two options:

!https://adobe-consulting-services.github.io/acs-aem-commons/features/mcp/images/process-dialog-completed.png

View: This opens the report in a new browser tab. You can copy info from here and stick it in other apps if you want.
Download (Excel): This turns the report into an Excel doc and downloads it to your computer. You can open it up in whatever spreadsheet tool you like and mess around with the data if you need to.
You can find more info about generated reports in the Tools section associated with the process that made the report. If you don't see the buttons, then either the process was stopped weirdly, it's still running, or it wasn't a process that makes a report.

---

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

---

## The option that corresponds to the "append" behavior is:

Recommendation: Create and Merge Properties - Create new nodes and update existing nodes with missing properties. Existing properties are left alone.

If you want to append new tags to existing nodes without modifying the existing ones and create missing intermediate nodes as regular folders, you might consider using:

Existing Action: Append
Structure Node Type: Sling:Folder
If you want to overwrite existing tags with the new ones and create missing intermediate nodes as regular folders, you might consider using:

Existing Action: Overwrite Existing Only
Structure Node Type: Sling:Folder

**Create and Merge Properties:**

- Creates new nodes.
- Updates existing nodes with missing properties.
- Existing properties are left unchanged.
- Useful when you want to add new content and update missing properties for existing content.

In the context of appending new tags to existing nodes without modifying the existing ones, you would use the "Create and Merge Properties" option.

So, for your specific scenario, you would choose:

- **Existing Action:** Create and Merge Properties
- **Structure Node Type:** Sling:Folder (or other types based on your requirements)

This option ensures that new tags are added to existing properties without overwriting or modifying the existing ones.

Certainly! To further illustrate the "Create and Merge Properties" option for appending new tags to existing nodes, here's a visual representation of sample data in a table:

**Table: Sample Data for "Create and Merge Properties" Option**

| path                           | cq:tags                                                                                                                                                                    |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /content/site/en/page1         | /roberthalf/tags-rh/content-type/article/tag:Development,/roberthalf/tags-rh/content-type/article/tag:Technology,/roberthalf/tags-rh/content-type/article/tag:Professional |
| /content/site/en/folder1/page2 | /roberthalf/tags-rh/content-type/article/tag:Development                                                                                                                   |
| /content/site/en/folder2/page3 | /roberthalf/tags-rh/content-type/article/tag:Technology,/roberthalf/tags-rh/content-type/article/tag:Professional                                                          |
| /content/site/en/page4         | /roberthalf/tags-rh/content-type/article/tag:Leadership,/roberthalf/tags-rh/content-type/article/tag:Management,/roberthalf/tags-rh/content-type/article/tag:Skills        |
| /content/site/en/folder3/page5 | /roberthalf/tags-rh/content-type/article/tag:Technology                                                                                                                    |
| /content/site/en/folder4/page6 | /roberthalf/tags-rh/content-type/article/tag:Career-Development,/roberthalf/tags-rh/content-type/article/tag:Professional-Growth                                           |

**Explanation:**

- Each row represents a different content page.
- The `path` column specifies the path of the content page.
- The `cq:tags` column contains tag paths starting from `/roberthalf/tags-rh/content-type/article/`.
- Tags are separated by commas within the `cq:tags` cell.

This table is designed to illustrate the "Create and Merge Properties" behavior, where new tags are appended to existing nodes without modifying the existing properties. Adjust the content, paths, and tags based on your specific AEM instance's structure and requirements. Always test your configuration in a controlled environment before applying it to a production system.

In the context of ACS AEM Data Importer, the "Existing action" and "Structure node type" settings help determine how the data should be managed if the destination nodes (pages or content structure) already exist or do not exist yet.

Here's a general guide on how to set these options:

Existing Action:

Append: Adds new values to existing multi-value properties without modifying existing values. Use this if you want to add new tags to pages without removing existing ones.
Overwrite: Replaces existing values with new values. Use this if you want to replace all existing tags on a page with the new ones specified in the CSV file.
Fail: Fails the import if the destination nodes already exist. Use this if you want to ensure that data is only imported into non-existing nodes.
Structure Node Type:

Sling:OrderedFolder: Creates folders with an ordered structure. This is useful when you want to maintain a specific order among child nodes.
Cq:Page: Creates nodes of type cq:Page. This is suitable for pages in AEM.
Sling:Folder: Creates regular folders without an ordered structure.
Example Configuration:

If you want to append new tags to existing pages without modifying the existing ones and create any missing intermediate nodes as regular folders, your configuration might look like this:

For example, if your import path is /content/mywebsite/en/page1 and the /content/mywebsite/en/ structure doesn't exist, AEM has to determine what type of nodes to create for the missing en and potentially mywebsite folders.

Here's how you might handle this:

Define the Desired Node Types:

Decide what node types you want for the missing intermediate nodes. This might depend on your content structure and requirements.
Update Import Configuration:

In the configuration of your Data Importer or ACS AEM Commons import process, there should be a setting related to the "Structure node type" or "Intermediate node type."
Specify the desired node type(s) for the missing intermediate nodes in this configuration.
Run the Import Process:

Execute the data import process.
Verify Results:

Check the content hierarchy to ensure that the missing intermediate nodes are created with the specified node type(s).
For instance, if you are importing language versions like /content/mywebsite/en/page1, you might want the en node to be of type sling:OrderedFolder or cq:Page. If you are importing content that represents a category or tag structure, you might use a specific node type like cq:Tag or cq:Page.

The specific configuration and options might vary depending on the version of ACS AEM Commons or Data Importer you are using. Consult the documentation or configuration settings related to the tool you're using for more precise information on how to handle the structure node types during imports.

[NOTES](https://gilberts-notes.notion.site/AEM-ACS-TOOLS-203e946469e64dcd9ddd517649dc6de8)
