
# Schema Overview
This illustration represents a simplified view of the database with sample data based on used schema.



**Users:**

| ID                                   | Name         | Email             | Profile    | Personal Group | Member of             | Admin of              | Requests            | Trash              | Favourites        | Group Files         |
|--------------------------------------|--------------|-------------------|------------|----------------|-----------------------|-----------------------|---------------------|--------------------|-------------------|---------------------|
| 1a15f1c9-4cf9-4c14-8b45-0151e9b346b0 | John Doe     | john@example.com | Lorem Ipsum| [file1, file2] | [Group 1]             | [Group 2]             | [Request 1, Request 2] | [Trash 1, Trash 2] | [Favourite 1]     | [GroupFile 1, GroupFile 2] |
| 2a95a0e1-dbf9-4c08-a9c0-315eb78412d2 | Jane Smith   | jane@example.com | Lorem Ipsum| [file3]        | [Group 2]             | [Group 3]             | [Request 3]         | [Trash 3]          | [Favourite 2, Favourite 3] | [GroupFile 3]      |

**Requests:**

| ID                                   | Role             | Group                                  | Requester                            |
|--------------------------------------|------------------|----------------------------------------|--------------------------------------|
| 1cbb1cb4-57e7-4241-9142-420875c08c93 | Role 1           | Group 1                                | John Doe                             |
| f575cc3d-c25f-4410-8c74-042e4fb1e6c8 | Role 2           | Group 1                                | John Doe                             |
| 8c0b372f-1d8e-4b2a-9c6e-5d67b1c9ad79 | Role 3           | Group 2                                | Jane Smith                           |

**User Personal Files:**

| ID                                   | Title       | FileType | URL             | CreatedAt           | User                                 |
|--------------------------------------|-------------|----------|-----------------|---------------------|--------------------------------------|
| 1ec04f65-f9c3-4769-810b-8be1a2029e8d | File 1      | PDF      | example.com/pdf | 2024-03-18 12:00:00 | John Doe                             |
| 2563456c-1be7-4d20-a867-181b083c9f43 | File 2      | CSV      | example.com/csv | 2024-03-18 12:00:00 | John Doe                             |
| 3e5e4a5e-0760-4532-8915-94df0473b2fc | File 3      | DOC      | example.com/doc | 2024-03-18 12:00:00 | Jane Smith                           |

**Trash:**

| ID                                   | Title       | FileType | URL             | CreatedAt           | User                                 |
|--------------------------------------|-------------|----------|-----------------|---------------------|--------------------------------------|
| 67bf534f-55f5-496b-b8a0-84e1f36dd2e3 | Trashed File| PDF      | example.com/pdf | 2024-03-18 12:00:00 | John Doe                             |
| 88e3a7c8-7355-499e-896d-d77d4750a80c | Deleted File| CSV      | example.com/csv | 2024-03-18 12:00:00 | John Doe                             |

**Favourites:**

| ID                                   | Title       | FileType | URL             | CreatedAt           | User                                 |
|--------------------------------------|-------------|----------|-----------------|---------------------|--------------------------------------|
| 2900d11c-e23e-4aae-b14b-4cc6a1e6249d | Favourite 1 | PDF      | example.com/pdf | 2024-03-18 12:00:00 | John Doe                             |
| 3c320d29-5f72-4d94-8f9e-c1f0e54524ac | Favourite 2 | CSV      | example.com/csv | 2024-03-18 12:00:00 | Jane Smith                           |
| 4f1dc9e1-1862-4cf9-af2b-27f09d226e20 | Favourite 3 | DOC      | example.com/doc | 2024-03-18 12:00:00 | Jane Smith                           |

**Groups:**


| ID                                   | Name       | Admins                                | Members                               | CreatedAt           | Files                                    | Requests                                |
|--------------------------------------|------------|---------------------------------------|---------------------------------------|---------------------|------------------------------------------|-----------------------------------------|
| 38230b05-9c0e-42c1-9d92-9f78ba7f9213 | Group 1    | [John Doe]                            | [John Doe, Jane Smith]                | 2024-03-18 12:00:00 | [GroupFile 1, GroupFile 2]              | [Request 1, Request 2]                   |
| 9ba36689-0115-4a78-a85b-9bc1b37acab7 | Group 2    | [Jane Smith]                          | [John Doe, Jane Smith]                | 2024-03-18 12:00:00 | [GroupFile 3]                           | [Request 3]                             |
| 24d41e3b-fd6d-443d-8a07-72955c7f4166 | Group 3    | [Jane Smith]                          | []                                    | 2024-03-18 12:00:00 | []                                       | []                                      |



**Group Files:**

| ID                                   | Title       | FileType | URL             | CreatedAt           | Group                                | CreatedBy                            |
|--------------------------------------|-------------|----------|-----------------|---------------------|--------------------------------------|--------------------------------------|
| e7fd628d-74cd-4c4f-a2ae-c92d65cf8e27 | GroupFile 1 | PDF      | example.com/pdf | 2024-03-18 12:00:00 | Group 1                              | John Doe                             |
| aeb765a2-c0f2-4ee5-ae1e-54a1c012bf12 | GroupFile 2 | CSV      | example.com/csv | 2024-03-18 12:00:00 | Group 1                              | John Doe                             |
| 57c3d7db-e5a3-4b37-947d-6c4946e43dd2 | GroupFile 3 | DOC      | example.com/doc | 2024-03-18 12:00:00 | Group 2                              | Jane Smith                           |


# 
