/* Domain 3: Describe considerations for working with non-relational data on Azure (15–20%) */
DP900.add(3, 'nrel-', [
  {
    q: "Which Azure Storage service is designed to store massive amounts of unstructured data, such as images, video and backups, as objects?",
    o: ["Azure Blob Storage", "Azure Files", "Azure Table storage", "Azure Queue storage"],
    a: [0],
    e: "Blob Storage is Azure's object store for unstructured data, accessed over HTTP/HTTPS and SDKs. Azure Files provides SMB/NFS file shares, Table storage holds key-value entities, and Queue storage holds messages."
  },
  {
    q: "In Azure Blob Storage, blobs are organised inside which type of object?",
    o: ["Containers", "Tables", "Shares", "Partitions"],
    a: [0],
    e: "A storage account contains containers, and containers hold blobs. Containers group blobs and can have their own access level. Shares are used by Azure Files, and tables by Table storage."
  },
  {
    q: "Which blob type is optimised for storing files that are written once and read many times, such as images and documents, and is made up of blocks that can be uploaded individually?",
    o: ["Block blob", "Page blob", "Append blob", "Archive blob"],
    a: [0],
    e: "Block blobs are the most common type, used for discrete objects like files, images and videos. They are composed of blocks (up to about 190 TiB per blob). Page blobs suit random read/write (VM disks), and append blobs suit logging."
  },
  {
    q: "Which blob type is optimised for random read and write operations and is used to back Azure virtual machine disks?",
    o: ["Page blob", "Block blob", "Append blob", "Hot blob"],
    a: [0],
    e: "Page blobs are collections of 512-byte pages optimised for random access, making them suitable for virtual hard disk (VHD) files. Block blobs are for files and append blobs are for append-only workloads."
  },
  {
    q: "Which blob type supports only adding new data to the end of the blob, making it ideal for log files?",
    o: ["Append blob", "Block blob", "Page blob", "Cool blob"],
    a: [0],
    e: "Append blobs are made of blocks optimised for append operations. You can add blocks to the end but not update or delete existing ones, which suits logging scenarios."
  },
  {
    q: "You need to store data that is accessed frequently, with the lowest access cost. Which Blob Storage access tier should you use?",
    o: ["Hot", "Cool", "Cold", "Archive"],
    a: [0],
    e: "The hot tier has the highest storage cost but the lowest access (transaction) cost, making it best for frequently accessed data. Cool, cold and archive have progressively cheaper storage but higher access costs and, for archive, retrieval delays."
  },
  {
    q: "Which Blob Storage access tier has the lowest storage cost but requires the blob to be rehydrated, which can take hours, before it can be read?",
    o: ["Archive", "Cool", "Cold", "Hot"],
    a: [0],
    e: "The archive tier is offline storage for data that is rarely accessed. Before reading an archived blob, you must rehydrate it to an online tier (hot, cool or cold), which can take up to 15 hours at standard priority."
  },
  {
    q: "A company must keep backup files for 7 years for compliance. The files will almost never be read, and a delay of several hours to retrieve them is acceptable. Which tier minimises cost?",
    o: ["Archive", "Hot", "Cool", "Premium"],
    a: [0],
    e: "Archive offers the lowest storage price for rarely accessed data with flexible latency requirements. Data should remain at least 180 days to avoid early-deletion charges, which suits long-term retention."
  },
  {
    q: "Data is accessed infrequently but must be available immediately when needed, and it will be stored for at least 30 days. Which access tier is MOST cost-effective?",
    o: ["Cool", "Hot", "Archive", "Premium block blob"],
    a: [0],
    e: "The cool tier is online (immediately readable) and cheaper for storage than hot, with higher access costs. It is intended for data stored at least 30 days and accessed infrequently. Archive would require rehydration before access."
  },
  {
    q: "Which feature can automatically move blobs from the hot tier to cool and then to archive based on their age?",
    o: ["Lifecycle management policies", "Soft delete", "Geo-redundant storage", "Shared access signatures"],
    a: [0],
    e: "Blob lifecycle management policies run rules that tier or delete blobs based on conditions such as days since creation, modification or last access, which reduces storage costs automatically."
  },
  {
    q: "What is Azure Data Lake Storage Gen2?",
    o: ["Blob Storage with a hierarchical namespace enabled, optimised for big data analytics", "A relational database for data warehousing", "A separate storage service unrelated to Blob Storage", "A NoSQL document database"],
    a: [0],
    e: "Data Lake Storage Gen2 is built on Azure Blob Storage. Enabling the hierarchical namespace on a storage account adds true directories, atomic directory operations and POSIX-style access control lists, which suit analytics engines like Spark and Synapse."
  },
  {
    q: "Which setting must be enabled on an Azure Storage account to use it as Azure Data Lake Storage Gen2?",
    o: ["Hierarchical namespace", "Large file shares", "Static website", "Blob versioning"],
    a: [0],
    e: "The hierarchical namespace organises blobs into a real directory structure. This is what turns a general-purpose v2 storage account into Data Lake Storage Gen2."
  },
  {
    q: "Which TWO are benefits of enabling the hierarchical namespace in Azure Data Lake Storage Gen2? (Choose two.)",
    o: ["Directory operations such as rename and delete are atomic and fast", "POSIX-compliant access control lists can be set on directories and files", "Data is automatically converted to relational tables", "Blobs are automatically replicated to every Azure region", "Every file is automatically indexed for full-text search"],
    a: [0, 1],
    e: "With a hierarchical namespace, renaming a directory is a single metadata operation rather than copying every blob, and you can apply POSIX ACLs at directory and file level. It does not convert data to tables or replicate globally. The hierarchical namespace does not add full-text search."
  },
  {
    q: "Which Azure service provides fully managed file shares that can be mounted by Windows, Linux and macOS using the SMB protocol?",
    o: ["Azure Files", "Azure Blob Storage", "Azure Table storage", "Azure Cosmos DB"],
    a: [0],
    e: "Azure Files offers cloud file shares accessible via SMB (and NFS for premium shares). It is commonly used to replace on-premises file servers or to share configuration files across VMs."
  },
  {
    q: "A company wants to move an on-premises Windows file server to the cloud while keeping a local cache for fast access at branch offices. Which feature should they use?",
    o: ["Azure File Sync", "Azure Data Box", "Blob lifecycle management", "Azure Cosmos DB change feed"],
    a: [0],
    e: "Azure File Sync centralises file shares in Azure Files while caching frequently used files on local Windows Servers. Cloud tiering keeps hot files local and moves cold ones to Azure."
  },
  {
    q: "Which TWO protocols can be used to access Azure Files shares? (Choose two.)",
    o: ["SMB (Server Message Block)", "NFS (Network File System)", "FTP only", "MQTT", "RDP (Remote Desktop Protocol)"],
    a: [0, 1],
    e: "Azure Files supports SMB (all tiers) and NFS (premium file shares). FTP is not a native Azure Files protocol, and MQTT is a messaging protocol used in IoT. RDP is for remote desktop sessions, not file access."
  },
  {
    q: "Azure Table storage stores data as:",
    o: ["Key-value entities identified by a partition key and row key", "Relational tables with foreign keys", "JSON documents with nested arrays queried by SQL", "Nodes and edges"],
    a: [0],
    e: "Table storage is a NoSQL key-attribute store. Each entity has a PartitionKey and RowKey that together form a unique key, plus a set of properties. It does not support foreign keys or joins."
  },
  {
    q: "In Azure Table storage, which two properties together uniquely identify an entity? (Choose two.)",
    o: ["PartitionKey", "RowKey", "Timestamp", "ETag", "Content-MD5"],
    a: [0, 1],
    e: "PartitionKey and RowKey form the entity's unique primary key. The partition key also determines how data is distributed across storage nodes. Timestamp is maintained by the system, and ETag is used for optimistic concurrency. Content-MD5 is a blob property used to check content integrity; it is not part of a table entity's key."
  },
  {
    q: "Why is the choice of partition key important in Azure Table storage and Azure Cosmos DB?",
    o: ["It determines how data is distributed across partitions, which affects scalability and query performance", "It sets the encryption key for the data", "It determines which users can read the data", "It controls which region the data is replicated to"],
    a: [0],
    e: "Items with the same partition key are stored together. A good key spreads requests evenly (avoiding 'hot' partitions) and supports common query patterns, so queries can target a single partition efficiently."
  },
  {
    q: "Which statement about entities in Azure Table storage is true?",
    o: ["Entities in the same table can have different sets of properties", "Every entity in a table must have exactly the same columns", "Entities must be stored as XML", "Tables support joins across entities"],
    a: [0],
    e: "Table storage is schemaless: apart from PartitionKey, RowKey and Timestamp, each entity can have different properties. This makes it flexible for semi-structured data."
  },
  {
    q: "Which storage redundancy option keeps three copies of data within a single datacenter in the primary region?",
    o: ["Locally redundant storage (LRS)", "Zone-redundant storage (ZRS)", "Geo-redundant storage (GRS)", "Geo-zone-redundant storage (GZRS)"],
    a: [0],
    e: "LRS replicates data three times within one datacenter. It is the cheapest option but does not protect against a datacenter-wide failure. ZRS spreads copies across availability zones, and GRS/GZRS also copy data to a secondary region."
  },
  {
    q: "Which storage redundancy option copies data synchronously across three availability zones in the primary region?",
    o: ["Zone-redundant storage (ZRS)", "Locally redundant storage (LRS)", "Geo-redundant storage (GRS)", "Read-access geo-redundant storage (RA-GRS)"],
    a: [0],
    e: "ZRS keeps three copies in separate availability zones within the primary region, protecting against the failure of an entire zone (datacenter)."
  },
  {
    q: "You need storage that survives a complete regional outage, and you want to be able to read data from the secondary region at any time. Which redundancy option should you choose?",
    o: ["Read-access geo-redundant storage (RA-GRS) or RA-GZRS", "Locally redundant storage (LRS)", "Zone-redundant storage (ZRS)", "Premium LRS"],
    a: [0],
    e: "Geo-redundant options copy data asynchronously to a paired secondary region. The read-access variants (RA-GRS, RA-GZRS) let you read from the secondary endpoint at all times, not only after a failover."
  },
  {
    q: "What is Azure Cosmos DB?",
    o: ["A globally distributed, multi-model NoSQL database service with single-digit millisecond latency", "A relational data warehouse", "A file share service", "An ETL tool"],
    a: [0],
    e: "Azure Cosmos DB is a fully managed NoSQL (and relational, via PostgreSQL) database offering turnkey global distribution, elastic scale, multiple APIs and low-latency SLAs."
  },
  {
    q: "Which Azure Cosmos DB API stores data as JSON documents and lets you query them using a SQL-like syntax?",
    o: ["API for NoSQL", "API for Apache Gremlin", "API for Table", "API for Apache Cassandra"],
    a: [0],
    e: "The API for NoSQL (formerly Core/SQL API) is the native Cosmos DB API. It stores JSON documents and supports a SQL-like query language such as `SELECT * FROM c WHERE c.city = 'Paris'`."
  },
  {
    q: "A company has an application built on MongoDB and wants to move to a managed Azure service with minimal code changes. Which service should it use?",
    o: ["Azure Cosmos DB for MongoDB", "Azure Cosmos DB for Apache Gremlin", "Azure Table storage", "Azure SQL Database"],
    a: [0],
    e: "Azure Cosmos DB for MongoDB implements the MongoDB wire protocol, so existing MongoDB drivers, tools and code work with little or no change. Options include RU-based and vCore-based deployments."
  },
  {
    q: "Which Azure Cosmos DB API should you use to store and traverse graph data, such as relationships between people in a social network?",
    o: ["API for Apache Gremlin", "API for Table", "API for MongoDB", "API for Apache Cassandra"],
    a: [0],
    e: "The API for Apache Gremlin supports graph data models with vertices and edges, queried using the Gremlin traversal language."
  },
  {
    q: "An organisation has an existing Apache Cassandra workload using CQL (Cassandra Query Language). Which Cosmos DB API should it use?",
    o: ["API for Apache Cassandra", "API for NoSQL", "API for Table", "API for PostgreSQL"],
    a: [0],
    e: "The API for Apache Cassandra is wire-protocol compatible with Cassandra, supporting CQL and existing Cassandra drivers. It stores data in a column-family model."
  },
  {
    q: "An application currently uses Azure Table storage. It now needs global distribution, guaranteed low latency and automatic secondary indexing. What should it migrate to with minimal code changes?",
    o: ["Azure Cosmos DB for Table", "Azure SQL Database", "Azure Files", "Azure Cosmos DB for Apache Gremlin"],
    a: [0],
    e: "Azure Cosmos DB for Table is compatible with the Azure Table storage SDKs and adds turnkey global distribution, automatic indexing of all properties, dedicated throughput and latency SLAs."
  },
  {
    q: "Which Azure Cosmos DB API is a distributed relational database service that uses PostgreSQL and is designed to scale out across multiple nodes?",
    o: ["Azure Cosmos DB for PostgreSQL", "Azure Cosmos DB for NoSQL", "Azure Cosmos DB for Table", "Azure Cosmos DB for MongoDB"],
    a: [0],
    e: "Azure Cosmos DB for PostgreSQL (powered by the Citus extension) distributes PostgreSQL tables across nodes for horizontal scale. It is the relational option within the Cosmos DB family."
  },
  {
    q: "What is the unit of measure for throughput in Azure Cosmos DB?",
    o: ["Request Units (RUs)", "Database Transaction Units (DTUs)", "vCores", "Capacity Units (CUs)"],
    a: [0],
    e: "Cosmos DB normalises the cost of operations (CPU, memory, I/O) into Request Units. Reading a 1 KB item by ID and partition key costs about 1 RU. You provision RU/s, use autoscale, or use serverless mode."
  },
  {
    q: "Which TWO capacity modes are available for Azure Cosmos DB throughput? (Choose two.)",
    o: ["Provisioned throughput (standard or autoscale)", "Serverless", "DTU-based", "Elastic pool", "Capacity units (F SKUs)"],
    a: [0, 1],
    e: "Cosmos DB supports provisioned throughput (fixed RU/s or autoscale between a minimum and maximum) and serverless (pay per RU consumed). DTUs and elastic pools are Azure SQL Database concepts. Capacity units and F SKUs belong to Microsoft Fabric."
  },
  {
    q: "What is the default consistency level for a new Azure Cosmos DB account?",
    o: ["Session", "Strong", "Eventual", "Bounded staleness"],
    a: [0],
    e: "Session consistency is the default and most widely used. Within a client session, reads always see that session's own writes (read-your-writes), while still offering good performance and availability."
  },
  {
    q: "Which Azure Cosmos DB consistency level guarantees that reads always return the most recent committed write, at the cost of higher latency?",
    o: ["Strong", "Session", "Consistent prefix", "Eventual"],
    a: [0],
    e: "Strong consistency provides linearizability: every read returns the latest committed version. It requires coordination across replicas, so it has higher write latency and is not available with multiple write regions."
  },
  {
    q: "Which Azure Cosmos DB consistency level offers the lowest latency and highest availability, but reads may return out-of-order data?",
    o: ["Eventual", "Strong", "Bounded staleness", "Session"],
    a: [0],
    e: "Eventual consistency gives no ordering guarantee for reads; replicas converge over time. It offers the best performance and is suitable where order does not matter, such as counting likes."
  },
  {
    q: "Arrange the Azure Cosmos DB consistency levels from strongest to weakest. Which ordering is correct?",
    o: ["Strong, Bounded staleness, Session, Consistent prefix, Eventual", "Session, Strong, Eventual, Consistent prefix, Bounded staleness", "Eventual, Consistent prefix, Session, Bounded staleness, Strong", "Strong, Session, Bounded staleness, Eventual, Consistent prefix"],
    a: [0],
    k: 1,
    e: "The five levels from strongest to weakest are Strong, Bounded staleness, Session, Consistent prefix and Eventual. Stronger levels give more predictable reads; weaker levels give lower latency and higher availability."
  },
  {
    q: "Which Cosmos DB consistency level guarantees that reads never see out-of-order writes, but may lag behind the latest writes?",
    o: ["Consistent prefix", "Strong", "Eventual", "Session"],
    a: [0],
    e: "Consistent prefix guarantees reads see writes in the order they were made (for example A, then A,B, then A,B,C, never A,C). Reads may be behind, but never out of order."
  },
  {
    q: "Which Cosmos DB consistency level lets you configure a maximum lag, measured in versions or time, by which reads can trail writes?",
    o: ["Bounded staleness", "Session", "Consistent prefix", "Strong"],
    a: [0],
    e: "Bounded staleness guarantees reads lag behind writes by at most K versions or T time interval. Outside that window it behaves like strong consistency, which is useful for globally distributed apps that want near-strong guarantees."
  },
  {
    q: "What is the hierarchy of resources in an Azure Cosmos DB for NoSQL account?",
    o: ["Account > Database > Container > Item", "Account > Container > Database > Item", "Account > Table > Row > Column", "Account > Share > Directory > File"],
    a: [0],
    e: "A Cosmos DB account contains databases; databases contain containers; containers store items (JSON documents). Throughput can be provisioned at the database or container level, and each container has a partition key."
  },
  {
    q: "Which TWO are features of Azure Cosmos DB? (Choose two.)",
    o: ["Automatic indexing of all properties by default", "Turnkey global distribution with multi-region writes", "Mandatory fixed schema defined before inserting data", "Support for SQL Server Agent jobs", "Joins across different containers"],
    a: [0, 1],
    e: "Cosmos DB automatically indexes every property unless you customise the indexing policy, and you can add regions with a click, including enabling multi-region writes. It is schema-agnostic and does not have SQL Agent. Cosmos DB queries run against a single container; JOIN works only within an item's own arrays."
  },
  {
    q: "What availability SLA does Azure Cosmos DB offer for accounts configured with multiple write regions?",
    o: ["99.999%", "99.9%", "99%", "95%"],
    a: [0],
    e: "Cosmos DB offers up to 99.999% read and write availability for multi-region accounts with multi-region writes, plus SLAs on latency, throughput and consistency."
  },
  {
    q: "Which Azure Cosmos DB feature provides a persistent, ordered record of changes to items in a container that applications can process, for example to trigger Azure Functions?",
    o: ["Change feed", "Time to live", "Analytical store", "Partition key"],
    a: [0],
    e: "The change feed exposes inserts and updates in the order they occur within each partition. It is used for event-driven architectures, real-time processing, and keeping other stores in sync."
  },
  {
    q: "Which Cosmos DB feature automatically deletes items after a specified period?",
    o: ["Time to live (TTL)", "Change feed", "Conflict resolution policy", "Autoscale"],
    a: [0],
    e: "Setting a TTL on a container or item makes Cosmos DB delete expired items automatically, without consuming provisioned throughput for explicit deletes. It is useful for session data or telemetry."
  },
  {
    q: "You need to run near real-time analytics on operational data in Azure Cosmos DB without affecting the performance of the transactional workload and without building ETL pipelines. Which feature helps?",
    o: ["Mirroring to Microsoft Fabric (or Azure Synapse Link with the analytical store)", "Increasing RU/s on the container", "Changing the consistency level to Strong", "Using Azure Files"],
    a: [0],
    e: "Cosmos DB mirroring in Microsoft Fabric (and the earlier Azure Synapse Link with the column-oriented analytical store) replicates operational data for analytics without consuming transactional RUs or requiring custom ETL."
  },
  {
    q: "Which scenario is BEST suited to Azure Cosmos DB?",
    o: ["A globally used retail app needing single-digit millisecond reads and writes in multiple regions", "A star-schema data warehouse for monthly reporting", "Storing virtual machine disks", "A Windows file share for an office"],
    a: [0],
    e: "Cosmos DB excels at globally distributed, low-latency, elastically scalable operational workloads such as retail, gaming, IoT and personalisation. Data warehouses, VM disks and file shares are served by other services."
  },
  {
    q: "Which TWO are common use cases for Azure Cosmos DB? (Choose two.)",
    o: ["IoT telemetry ingestion at high volume", "Real-time personalisation and product catalogs for e-commerce", "Hosting SMB file shares for Windows clients", "Running SSIS packages", "An enterprise star-schema data warehouse for historical reporting"],
    a: [0, 1],
    e: "Cosmos DB is widely used for IoT, retail catalogs, personalisation, gaming leaderboards and other high-scale, low-latency workloads. SMB shares are Azure Files, and SSIS packages run in Data Factory or on SQL Server. Star-schema warehousing is better served by Fabric Warehouse or Synapse."
  },
  {
    q: "What happens in Azure Cosmos DB if your application consumes more Request Units per second than you have provisioned?",
    o: ["Requests are rate-limited and return HTTP status 429 (too many requests) until throughput is available", "The database automatically switches to Azure SQL Database", "The data is deleted", "Requests are queued forever with no error"],
    a: [0],
    e: "Exceeding provisioned RU/s causes rate limiting with HTTP 429 responses and a retry-after hint. SDKs retry automatically. Autoscale can help absorb spikes by scaling between a minimum and maximum RU/s."
  },
  {
    q: "Which access mechanism lets you grant time-limited, restricted access to specific blobs without sharing the storage account key?",
    o: ["Shared access signature (SAS)", "Storage account key", "Public container access", "Lifecycle management"],
    a: [0],
    e: "A SAS token is a signed URL that grants specific permissions (such as read only) to specific resources for a defined time window. Account keys grant full access and should be protected."
  },
  {
    q: "Which of the following is the recommended way to authorise applications to access Azure Blob Storage?",
    o: ["Microsoft Entra ID with role-based access control (for example, Storage Blob Data Reader)", "Embedding the storage account key in source code", "Making all containers public", "Sharing a SAS token with no expiry"],
    a: [0],
    e: "Microsoft Entra ID with Azure RBAC (often via managed identities) avoids storing secrets and allows fine-grained, revocable access. Account keys in code and public containers are security risks."
  },
  {
    q: "Which TWO statements about Azure Blob Storage are correct? (Choose two.)",
    o: ["Blobs can be accessed over HTTP/HTTPS using REST APIs", "A storage account can contain multiple containers", "Blobs must be smaller than 1 MB", "Blob Storage enforces a relational schema", "Blobs are stored as rows identified by a PartitionKey and RowKey"],
    a: [0, 1],
    e: "Blob Storage exposes REST endpoints and SDKs, and an account can contain unlimited containers holding unlimited blobs. Block blobs can be up to about 190 TiB, and no relational schema is enforced. PartitionKey and RowKey describe Azure Table storage entities, not blobs."
  },
  {
    q: "Which Azure service would you use to physically ship large amounts of data (many terabytes) to Azure when network transfer would be too slow?",
    o: ["Azure Data Box", "Azure File Sync", "AzCopy", "Azure Cosmos DB change feed"],
    a: [0],
    e: "Azure Data Box devices are shipped to your site, filled with data, and returned to Microsoft for upload into Azure Storage. AzCopy and File Sync transfer data over the network."
  },
  {
    q: "Which command-line tool is designed to copy data to and from Azure Blob Storage and Azure Files efficiently?",
    o: ["AzCopy", "sqlcmd", "bcp", "Power Query"],
    a: [0],
    e: "AzCopy is a command-line utility optimised for high-performance copying of blobs and files to, from and between storage accounts."
  },
  {
    q: "Which graphical tool lets you browse, upload and download blobs, files, queues and tables in Azure Storage accounts from your desktop?",
    o: ["Azure Storage Explorer", "SQL Server Management Studio", "Power BI Desktop", "Azure Data Studio"],
    a: [0],
    e: "Azure Storage Explorer is a free desktop app (also available in the Azure portal as Storage browser) for managing storage account content."
  },
  {
    q: "A document in Azure Cosmos DB for NoSQL looks like this:\n`{\"id\":\"1\",\"customer\":\"Ana\",\"items\":[{\"sku\":\"A1\",\"qty\":2}]}`\nWhat type of data is this?",
    o: ["Semi-structured", "Structured", "Unstructured", "Binary"],
    a: [0],
    e: "JSON documents are semi-structured: they carry their own field names and can contain nested objects and arrays, and the shape can vary from document to document."
  },
  {
    q: "Which statement about schema in Azure Cosmos DB is true?",
    o: ["It is schema-agnostic: items in the same container can have different properties", "A fixed schema must be defined before inserting items", "Items must all have exactly the same properties", "Only numeric properties can be indexed"],
    a: [0],
    e: "Cosmos DB does not require a schema. Each item is a JSON document and different items can have different shapes. All properties are indexed automatically by default."
  },
  {
    q: "You want to minimise cost for a Cosmos DB database used by a small application with sporadic traffic and long idle periods. Which option is MOST appropriate?",
    o: ["Serverless capacity mode", "Provisioned throughput with a high fixed RU/s", "Multi-region writes in five regions", "Strong consistency"],
    a: [0],
    e: "Serverless charges only for the RUs consumed and storage used, so intermittent workloads don't pay for idle provisioned throughput. Provisioned or multi-region setups cost more when traffic is low."
  },
  {
    q: "Which non-relational data store would you choose for simple, inexpensive storage of large volumes of structured, non-relational data looked up by key, such as user preferences?",
    o: ["Azure Table storage", "Azure SQL Managed Instance", "Azure Synapse dedicated SQL pool", "Azure Files"],
    a: [0],
    e: "Azure Table storage is a low-cost key-value/attribute store for structured, non-relational data that is retrieved by PartitionKey and RowKey, such as user profiles, device information or metadata."
  },
  {
    q: "Which Azure Storage service is used to store messages for asynchronous communication between application components?",
    o: ["Azure Queue storage", "Azure Table storage", "Azure Files", "Azure Blob Storage"],
    a: [0],
    e: "Queue storage holds large numbers of messages (up to 64 KB each) that components can add and process asynchronously, decoupling producers and consumers."
  },
  {
    q: "Which TWO factors make a good partition key in Azure Cosmos DB? (Choose two.)",
    o: ["It has many distinct values (high cardinality)", "It spreads requests and storage evenly across partitions", "It has only two possible values", "It changes frequently on every update", "It is the same constant value for every item"],
    a: [0, 1],
    e: "A good partition key has high cardinality and distributes reads, writes and storage evenly, avoiding hot partitions. A key with very few values concentrates load, and a key's value cannot be updated in place on an item. A constant value puts every item in a single logical partition, which creates a hot partition and limits scale."
  },
  {
    q: "A storage account is configured with zone-redundant storage. What does this protect against?",
    o: ["Failure of a single availability zone within the region", "Failure of an entire Azure region", "Accidental deletion by a user", "Ransomware encryption of blobs"],
    a: [0],
    e: "ZRS keeps copies in three zones in one region, protecting against a zone outage. It does not protect against region-wide disasters (use GZRS/GRS) or user mistakes (use soft delete, versioning or backups)."
  },
  {
    q: "Which Blob Storage feature lets you recover a blob that was accidentally deleted within a configured retention period?",
    o: ["Soft delete", "Lifecycle management", "Geo-redundant storage", "Shared access signatures"],
    a: [0],
    e: "Blob soft delete keeps deleted blobs (and optionally container soft delete keeps deleted containers) for a retention period so they can be restored. Redundancy options protect against hardware failure, not user deletions."
  },
  {
    q: "Which Azure Cosmos DB feature allows the same data to be written to the nearest region for users worldwide, with conflicts resolved automatically?",
    o: ["Multi-region writes", "Time to live", "Serverless", "Integrated cache"],
    a: [0],
    e: "Enabling multi-region writes makes every region writable. Cosmos DB then resolves write conflicts using last-writer-wins by default, or a custom policy."
  },
  {
    q: "A company wants to store video files uploaded by customers and serve them to users around the world. Which combination is MOST suitable?",
    o: ["Azure Blob Storage with Azure Front Door or a CDN in front of it", "Azure SQL Database with VARBINARY columns", "Azure Table storage", "Azure Cosmos DB for Apache Gremlin"],
    a: [0],
    e: "Blob Storage is the cost-effective home for large media files, and a CDN (for example Azure Front Door) caches content close to users. Storing large videos in a relational or NoSQL database is expensive and inefficient."
  },
  {
    q: "Which TWO Azure Cosmos DB APIs are designed to help migrate existing workloads that use open-source NoSQL databases? (Choose two.)",
    o: ["API for MongoDB", "API for Apache Cassandra", "API for NoSQL", "Azure SQL API", "API for Table"],
    a: [0, 1],
    e: "The MongoDB and Apache Cassandra APIs are wire-compatible with those open-source databases, so apps can migrate with minimal changes. API for NoSQL is the native Cosmos DB API, and there is no 'Azure SQL API' in Cosmos DB. API for Table targets apps written for Azure Table storage, which is an Azure service rather than an open-source database."
  },
  {
    q: "Which description best fits the Azure Cosmos DB for NoSQL query below?\n`SELECT c.name FROM c WHERE c.city = 'Seattle'`",
    o: ["It returns the name property of items in the container whose city property is Seattle", "It creates a container called c", "It deletes items where city is Seattle", "It runs a join between two containers"],
    a: [0],
    e: "Cosmos DB for NoSQL uses a SQL-like syntax over JSON. `c` is an alias for items in the container being queried. Cosmos DB queries don't support joins across containers; JOIN only works within an item's nested arrays."
  },
  {
    q: "Which is a key difference between Azure Table storage and Azure Cosmos DB for Table?",
    o: ["Cosmos DB for Table offers global distribution, automatic indexing of all properties and latency SLAs", "Table storage supports SQL joins while Cosmos DB does not", "Cosmos DB for Table does not support PartitionKey or RowKey", "Table storage is a relational database"],
    a: [0],
    e: "Both use the same entity model and SDK, but Cosmos DB for Table adds dedicated throughput, global distribution, secondary indexes on all properties and single-digit millisecond latency guarantees. Table storage only indexes PartitionKey and RowKey."
  },
  {
    q: "Which kind of Azure Storage account should you create for most scenarios, supporting blobs, files, queues and tables?",
    o: ["Standard general-purpose v2", "Premium page blobs only", "Blob storage (legacy)", "Azure SQL logical server"],
    a: [0],
    e: "Standard general-purpose v2 is the recommended account type, supporting all storage services and access tiers. Premium account types are specialised for low-latency block blobs, file shares or page blobs."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure Blob Storage can store unstructured data such as images and videos.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Blob Storage is Azure's object store for unstructured data, including images, video, audio, backups and documents."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nData in the archive access tier can be read immediately without rehydration.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. The archive tier is offline. A blob must be rehydrated to the hot, cool or cold tier before it can be read, which can take up to 15 hours at standard priority."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure Cosmos DB requires you to define a schema before inserting items.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. Cosmos DB is schema-agnostic. Items are JSON documents that can have different shapes, and all properties are indexed automatically by default."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure Files shares can be mounted by on-premises Windows computers using the SMB protocol.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Azure Files exposes SMB shares that Windows, Linux and macOS can mount, including from on-premises machines over the internet (port 445) or through a VPN or ExpressRoute."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nEach entity in Azure Table storage is uniquely identified by its PartitionKey and RowKey.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. The combination of PartitionKey and RowKey is the unique key for an entity. The partition key also controls how data is distributed."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nLocally redundant storage (LRS) protects your data if an entire Azure region becomes unavailable.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. LRS keeps three copies inside one datacenter in a single region. To survive a regional outage, use geo-redundant storage (GRS or GZRS)."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nSession is the default consistency level for a new Azure Cosmos DB account.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Session consistency is the default. It guarantees read-your-own-writes within a client session while keeping latency low."
  },
  {
    q: "Which Blob Storage access tier is BEST for data that is read many times a day?",
    o: ["Hot", "Cool", "Archive"],
    a: [0],
    k: 1,
    e: "Hot has the lowest access cost and is designed for frequently accessed data. Cool suits infrequently accessed data stored at least 30 days, and archive is offline storage for rarely used data."
  },
  {
    q: "Which Azure Cosmos DB API should you choose for a new application that stores JSON documents and is written specifically for Cosmos DB?",
    o: ["API for NoSQL", "API for Apache Gremlin", "API for Table"],
    a: [0],
    e: "API for NoSQL is the native Cosmos DB API for JSON documents, with a SQL-like query language. Gremlin is for graph data, and Table is for applications built for Azure Table storage."
  },
  {
    q: "Which Azure Storage service should you use to replace an on-premises Windows file server share?",
    o: ["Azure Files", "Azure Blob Storage", "Azure Table storage"],
    a: [0],
    e: "Azure Files provides SMB/NFS file shares that clients can map as network drives. Blob Storage is object storage accessed over HTTP, and Table storage is a key-value store."
  },
  {
    q: "Which Azure Storage redundancy option copies data across three availability zones in the primary region only?",
    o: ["Zone-redundant storage (ZRS)", "Locally redundant storage (LRS)", "Geo-redundant storage (GRS)"],
    a: [0],
    e: "ZRS keeps copies in three availability zones within the primary region. LRS keeps three copies in one datacenter, and GRS also copies data to a secondary region (using LRS in each)."
  },
  {
    q: "A social network needs to store people and the relationships between them, then query friends of friends. Which Cosmos DB API fits best?",
    o: ["API for Apache Gremlin", "API for Table", "API for Apache Cassandra"],
    a: [0],
    e: "Gremlin is a graph API: people are vertices and relationships are edges, so multi-hop traversals are efficient. Table is key-value, and Cassandra is column-family."
  }
]);
