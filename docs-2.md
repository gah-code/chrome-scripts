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

[NOTES](https://gilberts-notes.notion.site/AEM-ACS-TOOLS-203e946469e64dcd9ddd517649dc6de8)
