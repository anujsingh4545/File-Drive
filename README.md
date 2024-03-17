
# Schema Overview
This illustration represents a simplified view of the database with sample data based on used schema.

### Users Table:
| id                                    | name          | email                 | profile                           |
|---------------------------------------|---------------|-----------------------|-----------------------------------|
| 1f38f0c3-dc55-4070-8587-2d7675e06964  | John Doe      | john@example.com      | Software Engineer                 |
| 2e7b6a0b-dc4f-42e5-91ed-f6f96513e68d  | Jane Smith    | jane@example.com      | Data Analyst                      |
| 3b6f3a7c-3bc4-4f9a-b0e9-70f160f6dca2  | Alice Johnson | alice@example.com     | Project Manager                   |

### UserPersonalFiles Table:
| id                                    | title              | filetype | url                                | userId                                |
|---------------------------------------|--------------------|----------|------------------------------------|----------------------------------------|
| 01e1cace-e0b4-43d2-9327-d637a75e94a3  | Personal Resume    | PDF      | example.com/resume.pdf            | 1f38f0c3-dc55-4070-8587-2d7675e06964 |
| 198befae-f657-4be8-ae78-84febbd166dc  | Profile Picture    | JPG      | example.com/profile.jpg           | 2e7b6a0b-dc4f-42e5-91ed-f6f96513e68d |
| 2d1ad813-4090-42e1-877d-8d87fd8b5db2  | Portfolio          | ZIP      | example.com/portfolio.zip        | 3b6f3a7c-3bc4-4f9a-b0e9-70f160f6dca2 |

### Groups Table:
| id                                    | name      |
|---------------------------------------|-----------|
| 65ed879b-b144-4b02-8099-faad6cc8a4e9  | Project A |
| 7e306536-61ac-47d7-b07b-dc0bb1e10dd9  | Project B |

### Group Admins Table:
| groupId                               | adminId                                |
|---------------------------------------|----------------------------------------|
| 65ed879b-b144-4b02-8099-faad6cc8a4e9  | 1f38f0c3-dc55-4070-8587-2d7675e06964   |
| 7e306536-61ac-47d7-b07b-dc0bb1e10dd9  | 2e7b6a0b-dc4f-42e5-91ed-f6f96513e68d   |

### Group Members Table:
| groupId                               | memberId                               |
|---------------------------------------|----------------------------------------|
| 65ed879b-b144-4b02-8099-faad6cc8a4e9  | 2e7b6a0b-dc4f-42e5-91ed-f6f96513e68d   |
| 7e306536-61ac-47d7-b07b-dc0bb1e10dd9  | 1f38f0c3-dc55-4070-8587-2d7675e06964   |

### Group Files Table:
| id                                    | title              | filetype | url                              | groupId                                |
|---------------------------------------|--------------------|----------|----------------------------------|----------------------------------------|
| 8a0e048a-b91d-4a78-938d-bdfb6a4b2983  | Project_A_Docs     | PDF      | example.com/project_a_docs.pdf  | 65ed879b-b144-4b02-8099-faad6cc8a4e9 |
| e5392825-d1a6-4321-91a5-f8f6a6b7b4e1  | Project_A_Presentation | PPTX     | example.com/project_a_presentation.pptx | 65ed879b-b144-4b02-8099-faad6cc8a4e9 |
| bff9796d-1b12-4e62-b8b8-04e7e7bcb3e7  | Project_B_Research | CSV      | example.com/project_b_research.csv | 7e306536-61ac-47d7-b07b-dc0bb1e10dd9 |
| 42ef7c5d-875f-4cf5-a433-2e474e0f3c7e  | Project_B_Slides   | PPTX     | example.com/project_b_slides.pptx | 7e306536-61ac-47d7-b07b-dc0bb1e10dd9 |

### Requests Table:
| id                                    | role    | groupId                               | userId                                |
|---------------------------------------|---------|---------------------------------------|----------------------------------------|
| 1a833098-24a3-404b-8ec9-72e6b67c5ef6  | Member  | 65ed879b-b144-4b02-8099-faad6cc8a4e9  | 3b6f3a7c-3bc4-4f9a-b0e9-70f160f6dca2   |
| 2b972d9d-3824-4c63-94ed-7292a1b949fb  | Admin   | 7e306536-61ac-47d7-b07b-dc0bb1e10dd9  | 1f38f0c3-dc55-407


