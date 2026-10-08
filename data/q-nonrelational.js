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
    o: ["Blob Storage with a hierarchical namespace, optimised for big data analytics", "A relational data warehouse service that stores tables as Parquet files", "A separate file storage service that is unrelated to Azure Blob Storage", "A NoSQL document database that stores data lake metadata as JSON"],
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
    o: ["Directory operations such as rename and delete are atomic and fast", "POSIX-compliant access control lists can be set on directories and files", "Data is automatically converted into relational tables that you can query with T-SQL", "Blobs are automatically replicated to every Azure region where you have resources", "Every file is automatically indexed for full-text search across the whole account"],
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
    o: ["SMB (Server Message Block)", "NFS (Network File System)", "FTPS (FTP over TLS)", "WebDAV over HTTPS", "RDP (Remote Desktop Protocol)"],
    a: [0, 1],
    e: "Azure Files shares are mounted using SMB (all tiers) or NFS (premium file shares), and can also be reached programmatically through the FileREST API. FTPS, WebDAV and RDP are not protocols for mounting Azure file shares."
  },
  {
    q: "Azure Table storage stores data as:",
    o: ["Key-value entities identified by a partition key and row key", "Relational tables linked to each other with primary and foreign keys", "JSON documents with nested arrays, queried with a SQL-like language", "Nodes and edges that represent entities and the relationships between them"],
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
    o: ["It controls how data is spread across partitions, which affects scale and performance", "It sets the encryption key that is used to protect the data stored in each partition", "It determines which users and applications are allowed to read the data in each partition", "It controls which Azure regions the data in each partition is replicated to for availability"],
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
    o: ["RA-GRS or RA-GZRS", "LRS or Premium LRS", "ZRS", "GRS without read access"],
    a: [0],
    e: "Geo-redundant options copy data asynchronously to a paired secondary region. The read-access variants (RA-GRS, RA-GZRS) let you read from the secondary endpoint at all times, not only after a failover."
  },
  {
    q: "What is Azure Cosmos DB?",
    o: ["A globally distributed NoSQL database service with single-digit millisecond latency", "A relational data warehouse service that runs massively parallel analytical queries", "A managed file share service that clients can mount using the SMB protocol", "A data integration service that orchestrates ETL pipelines between data stores"],
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
    e: "Cosmos DB supports provisioned throughput (fixed RU/s or autoscale between a minimum and maximum) and serverless (pay per RU consumed). DTUs and elastic pools are Azure SQL Database concepts. Capacity units and F SKUs belong to Microsoft Fabric. Serverless runs in one region only, so it can't be used for multi-region accounts."
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
    o: ["Consistent prefix", "Strong", "Eventual", "Bounded staleness"],
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
    o: ["99.999%", "99.99%", "99.95%", "99.9%"],
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
    o: ["Mirroring to Microsoft Fabric (or Synapse Link with the analytical store)", "Increasing the provisioned RU/s on the container to cover the analytics queries", "Changing the account's consistency level to Strong before running analytics", "Exporting the container to Azure Files each night and querying the export"],
    a: [0],
    e: "Cosmos DB mirroring in Microsoft Fabric (and the earlier Azure Synapse Link with the column-oriented analytical store) replicates operational data for analytics without consuming transactional RUs or requiring custom ETL."
  },
  {
    q: "Which scenario is BEST suited to Azure Cosmos DB?",
    o: ["A global retail app that needs millisecond reads and writes in many regions", "A star-schema data warehouse used for monthly financial reporting", "Storing the operating system disks for a fleet of virtual machines", "A Windows file share that office staff map as a network drive"],
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
    o: ["Requests are rate-limited with HTTP 429 (too many requests) until throughput is available", "The account automatically scales up to the next pricing tier and bills the difference", "Extra requests are queued in the service and processed later without returning an error", "The container switches to eventual consistency until the request rate drops again"],
    a: [0],
    e: "Exceeding provisioned RU/s causes rate limiting with HTTP 429 responses and a retry-after hint. SDKs retry automatically. Autoscale can help absorb spikes by scaling between a minimum and maximum RU/s."
  },
  {
    q: "Which access mechanism lets you grant time-limited, restricted access to specific blobs without sharing the storage account key?",
    o: ["Shared access signature (SAS)", "Storage account access key", "Anonymous public read access on the container", "Stored access policy with no signature"],
    a: [0],
    e: "A SAS token is a signed URL that grants specific permissions (such as read only) to specific resources for a defined time window. Account keys grant full access and should be protected."
  },
  {
    q: "Which of the following is the recommended way to authorise applications to access Azure Blob Storage?",
    o: ["Microsoft Entra ID with Azure RBAC roles such as Storage Blob Data Reader", "Storing the storage account key in the application's configuration file", "Setting the container's public access level to allow anonymous reads", "Sharing one account-level SAS token with no expiry date across all apps"],
    a: [0],
    e: "Microsoft Entra ID with Azure RBAC (often via managed identities) avoids storing secrets and allows fine-grained, revocable access. Account keys in code and public containers are security risks."
  },
  {
    q: "Which TWO statements about Azure Blob Storage are correct? (Choose two.)",
    o: ["Blobs can be accessed over HTTP/HTTPS using REST APIs", "A storage account can contain multiple containers", "Blob Storage enforces a schema on the files stored in each container", "Each blob can be at most 1 GB in size", "Blobs are stored as rows identified by a PartitionKey and RowKey"],
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
    o: ["It is schema-agnostic: items in the same container can have different properties", "A fixed schema must be defined for each container before any items are inserted", "Items in a container must all have exactly the same properties and data types", "Only numeric and string properties are indexed; other properties cannot be queried"],
    a: [0],
    e: "Cosmos DB does not require a schema. Each item is a JSON document and different items can have different shapes. All properties are indexed automatically by default."
  },
  {
    q: "You want to minimise cost for a Cosmos DB database used by a small application with sporadic traffic and long idle periods. Which option is MOST appropriate?",
    o: ["Serverless capacity mode", "Provisioned throughput with a high fixed RU/s", "Multi-region writes in five regions", "Strong consistency"],
    a: [0],
    e: "Serverless charges only for the RUs consumed and storage used, so intermittent workloads don't pay for idle provisioned throughput. Provisioned or multi-region setups cost more when traffic is low. Serverless accounts run in a single Azure region. Older course material quotes a 50 GB per-container limit; Microsoft has since raised it, so expect questions on when to use serverless rather than on the exact number."
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
    o: ["It has many distinct values (high cardinality)", "It spreads requests and storage evenly across partitions", "It is a Boolean property such as isActive", "It is updated frequently whenever an item changes", "It is the same constant value for every item"],
    a: [0, 1],
    e: "A good partition key has high cardinality and distributes reads, writes and storage evenly, avoiding hot partitions. A key with very few values concentrates load, and a key's value cannot be updated in place on an item. A constant value puts every item in a single logical partition, which creates a hot partition and limits scale."
  },
  {
    q: "A storage account is configured with zone-redundant storage. What does this protect against?",
    o: ["Failure of a single availability zone within the region", "Failure of an entire Azure region", "Accidental deletion of blobs by a user", "Corruption caused by an application bug"],
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
    o: ["Azure Blob Storage with Azure Front Door or a CDN", "Azure SQL Database with VARBINARY(MAX) columns", "Azure Table storage with one entity per video", "Azure Cosmos DB with the videos stored in items"],
    a: [0],
    e: "Blob Storage is the cost-effective home for large media files, and a CDN (for example Azure Front Door) caches content close to users. Storing large videos in a relational or NoSQL database is expensive and inefficient."
  },
  {
    q: "Which TWO Azure Cosmos DB APIs are designed to help migrate existing workloads that use open-source NoSQL databases? (Choose two.)",
    o: ["API for MongoDB", "API for Apache Cassandra", "API for NoSQL", "API for PostgreSQL", "API for Table"],
    a: [0, 1],
    e: "The MongoDB and Apache Cassandra APIs are wire-compatible with those open-source NoSQL databases, so apps can migrate with minimal changes. API for NoSQL is the native Cosmos DB API, Cosmos DB for PostgreSQL targets the relational PostgreSQL engine rather than a NoSQL database, and API for Table targets apps written for Azure Table storage, which is an Azure service rather than an open-source database."
  },
  {
    q: "Which description best fits the Azure Cosmos DB for NoSQL query below?\n`SELECT c.name FROM c WHERE c.city = 'Seattle'`",
    o: ["It returns the name of each item in the container whose city is Seattle", "It creates a container named c and copies items whose city is Seattle into it", "It deletes items from container c whose city is Seattle and returns their names", "It joins container c with a second container on the city property and returns names"],
    a: [0],
    e: "Cosmos DB for NoSQL uses a SQL-like syntax over JSON. `c` is an alias for items in the container being queried. Cosmos DB queries don't support joins across containers; JOIN only works within an item's nested arrays."
  },
  {
    q: "Which is a key difference between Azure Table storage and Azure Cosmos DB for Table?",
    o: ["Cosmos DB for Table adds global distribution, indexing of all properties and latency SLAs", "Table storage supports SQL joins between tables, while Cosmos DB for Table does not", "Cosmos DB for Table replaces PartitionKey and RowKey with an automatically generated ID", "Table storage is a relational database, while Cosmos DB for Table is a NoSQL database"],
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
  },
  {
    q: "What is the maximum amount of data that a single logical partition (one partition key value) can hold in Azure Cosmos DB?",
    o: ["20 GB", "1 GB", "10 TB", "Unlimited"],
    a: [0],
    e: "Each logical partition can store up to 20 GB. Choose a partition key with enough distinct values that no single value grows beyond this, or use a synthetic or hierarchical partition key."
  },
  {
    q: "A company must store financial records so that they cannot be modified or deleted for seven years, to meet regulatory requirements. Which Blob Storage feature should it use?",
    o: ["Immutable storage with a retention policy", "Blob soft delete with a long retention", "The archive access tier with a lock", "Geo-zone-redundant storage (GZRS)"],
    a: [0],
    e: "Immutable storage makes blobs write once, read many (WORM) for a retention period, so nobody can modify or delete them. Soft delete only lets you recover deleted blobs, and access tiers and redundancy do not prevent changes."
  },
  {
    q: "Which Azure Storage feature can serve HTML, CSS and JavaScript files directly from a container named $web?",
    o: ["Static website hosting", "Azure File Sync", "Table storage", "Lifecycle management"],
    a: [0],
    e: "Static website hosting in Blob Storage serves static content from the $web container over a public web endpoint, with no web server to manage."
  },
  {
    q: "Which Blob Storage feature automatically keeps previous versions of a blob whenever it is overwritten, so earlier content can be restored?",
    o: ["Blob versioning", "Archive tier", "Shared access signatures", "Hierarchical namespace"],
    a: [0],
    e: "With blob versioning enabled, each write creates a new version and keeps the old ones, so you can restore content after accidental changes. The other features do not track previous content."
  },
  {
    q: "In Azure Data Lake Storage Gen2, which mechanism lets you grant a user access to one specific directory rather than the whole storage account?",
    o: ["POSIX-style ACLs", "Storage account keys", "Blob access tiers", "Container public access levels"],
    a: [0],
    e: "ADLS Gen2 supports ACLs on directories and files, which allow fine-grained permissions. Azure RBAC roles apply at the account or container level, and account keys grant full access to everything."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure Table storage supports joins between tables.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. Table storage is a NoSQL key-value store with no joins, foreign keys or stored procedures. Data that is often read together is usually denormalized into the same entity or partition."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure Cosmos DB can replicate data automatically to any number of Azure regions you add to the account.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Global distribution is built in: you add regions to the account and Cosmos DB replicates data to them automatically, without downtime."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure Data Lake Storage Gen2 is built on Azure Blob Storage.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. ADLS Gen2 is Blob Storage with the hierarchical namespace enabled, so it keeps Blob Storage features such as access tiers, redundancy options and lifecycle management."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nDifferent containers in the same Azure Cosmos DB account can use different APIs, such as MongoDB for one container and Gremlin for another.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. The API is chosen when the account is created and applies to the whole account. To use another API, create another Cosmos DB account."
  },
  {
    q: "Which two Azure services store non-relational data? (Choose two.)",
    o: ["Azure Blob Storage", "Azure Table storage", "Azure SQL Database", "Azure Database for PostgreSQL", "Azure SQL Managed Instance"],
    a: [0, 1],
    e: "Blob Storage (objects) and Table storage (key-value entities) are non-relational. Azure SQL Database, Azure Database for PostgreSQL and SQL Managed Instance are relational databases."
  },
  {
    q: "Which two are consistency levels offered by Azure Cosmos DB? (Choose two.)",
    o: ["Bounded staleness", "Consistent prefix", "Read committed", "Serializable", "Snapshot isolation"],
    a: [0, 1],
    e: "Cosmos DB offers five levels: Strong, Bounded staleness, Session, Consistent prefix and Eventual. Read committed, Serializable and Snapshot are transaction isolation levels in relational databases."
  },
  {
    q: "Which two actions can reduce the cost of storing infrequently used data in Azure Blob Storage? (Choose two.)",
    o: ["Move the blobs to the cool, cold or archive tier", "Create a lifecycle management rule that tiers blobs by age", "Change the account's redundancy from LRS to GZRS", "Move the blobs into a premium block blob account", "Enable anonymous public access on the container"],
    a: [0, 1],
    e: "Cooler tiers cost less per GB, and lifecycle rules tier data automatically. GZRS and premium storage cost more, and public access affects security, not cost."
  },
  {
    q: "Throughput that is dedicated to a single Azure Cosmos DB container is provisioned at which level?",
    o: ["Container", "Database", "Item"],
    a: [0],
    k: 1,
    e: "Throughput can be provisioned on a container (dedicated to it) or on a database (shared by its containers). It cannot be provisioned on individual items."
  },
  {
    q: "Which Blob Storage access tier requires data to be stored for at least 90 days to avoid an early deletion charge?",
    o: ["Cold", "Cool", "Archive"],
    a: [0],
    k: 1,
    e: "Minimum storage durations are 30 days for cool, 90 days for cold and 180 days for archive. The hot tier has no minimum."
  },
  {
    q: "Which Azure Files feature takes a read-only, point-in-time copy of a file share, so you can restore files after accidental changes?",
    o: ["Share snapshots", "Blob versioning", "Lifecycle management"],
    a: [0],
    e: "Share snapshots capture the state of an Azure file share at a point in time. Blob versioning and lifecycle management apply to Blob Storage."
  },
  {
    q: "In Azure Cosmos DB for NoSQL, what is an item?",
    o: ["A single JSON document stored in a container", "A group of containers that share throughput", "The unit used to measure throughput"],
    a: [0],
    e: "Items are the individual JSON documents stored in a container. Databases group containers, and Request Units measure throughput."
  },
  {
    t: "yesno",
    q: "Consider these statements about Azure Blob Storage.",
    s: [
      ["Block blobs are the best choice for storing images and documents.", true],
      ["Blobs in the archive tier can be read immediately.", false],
      ["A single container can hold an unlimited number of blobs.", true]
    ],
    e: "1 Yes: block blobs are designed for discrete files such as images and documents. 2 No: archived blobs must be rehydrated to an online tier first, which can take hours. 3 Yes: there is no limit on the number of blobs in a container."
  },
  {
    t: "yesno",
    q: "Consider these statements about Azure Files.",
    s: [
      ["Azure Files shares can be accessed using the SMB protocol.", true],
      ["Azure Files is a NoSQL database for key-value data.", false],
      ["Azure File Sync can cache Azure file shares on on-premises Windows Servers.", true]
    ],
    e: "1 Yes: Azure Files provides SMB (and NFS) file shares. 2 No: it is a file share service; key-value data belongs in Table storage or Cosmos DB. 3 Yes: Azure File Sync keeps frequently used files cached on local Windows Servers."
  },
  {
    t: "yesno",
    q: "Consider these statements about Azure Cosmos DB.",
    s: [
      ["Azure Cosmos DB supports several APIs, including MongoDB and Apache Cassandra.", true],
      ["Azure Cosmos DB indexes every property of every item by default.", true],
      ["Azure Cosmos DB offers its low-latency guarantees only for accounts in a single region.", false]
    ],
    e: "1 Yes: APIs include NoSQL, MongoDB, Apache Cassandra, Apache Gremlin, Table and PostgreSQL. 2 Yes: automatic indexing is on by default and can be tuned. 3 No: the latency SLA applies in every region of a globally distributed account."
  },
  {
    t: "yesno",
    q: "Consider these statements about Azure Table storage.",
    s: [
      ["Azure Table storage is a relational database that supports foreign keys.", false],
      ["Each entity in a table has a PartitionKey and a RowKey.", true],
      ["Entities in the same table can have different properties.", true]
    ],
    e: "1 No: Table storage is a NoSQL key-attribute store with no foreign keys or joins. 2 Yes: PartitionKey and RowKey together form the unique key. 3 Yes: tables are schemaless beyond the key and system properties."
  },
  {
    t: "match",
    q: "Match each requirement to the most appropriate Azure Storage service.",
    c: ["Azure Blob Storage", "Azure Files", "Azure Table storage", "Azure Queue storage"],
    s: [
      ["Store product photos that a website serves", 0],
      ["Replace an on-premises SMB file share", 1],
      ["Store user preferences looked up by a key", 2],
      ["Pass messages between application components asynchronously", 3]
    ],
    e: "Blob Storage is object storage for files such as images. Azure Files provides SMB/NFS shares. Table storage is a key-value store for structured, non-relational data. Queue storage holds messages for decoupled processing."
  },
  {
    t: "match",
    q: "Match each application to the Azure Cosmos DB API it should use.",
    c: ["API for NoSQL", "API for MongoDB", "API for Apache Cassandra", "API for Apache Gremlin", "API for Table"],
    s: [
      ["A new app that stores JSON documents and queries them with SQL-like syntax", 0],
      ["An existing app that uses MongoDB drivers", 1],
      ["An existing app that uses CQL queries", 2],
      ["A recommendation engine that traverses relationships between products and customers", 3],
      ["An Azure Table storage app that now needs global distribution", 4]
    ],
    e: "API for NoSQL is the native document API. The MongoDB and Cassandra APIs are wire-compatible with those databases. Gremlin is for graph traversal, and API for Table upgrades Azure Table storage apps."
  },
  {
    t: "match",
    q: "Match each Blob Storage access tier to the data it suits best.",
    c: ["Hot", "Cool", "Cold", "Archive"],
    s: [
      ["Website images read thousands of times a day", 0],
      ["Monthly reports read occasionally and kept for at least 30 days", 1],
      ["Rarely read data kept at least 90 days that must still be readable immediately", 2],
      ["Compliance backups kept for years that can wait hours to be retrieved", 3]
    ],
    e: "Hot has the lowest access cost for frequent reads. Cool (30-day minimum) and cold (90-day minimum) are cheaper online tiers for less frequent access. Archive is offline, cheapest to store, and needs rehydration before reading."
  },
  {
    t: "match",
    q: "Match each Azure Cosmos DB consistency level to its description.",
    c: ["Strong", "Bounded staleness", "Session", "Eventual"],
    s: [
      ["Reads always return the most recent committed write", 0],
      ["Reads can lag writes by at most a configured number of versions or time", 1],
      ["A client always reads its own writes; this is the default level", 2],
      ["Reads may arrive out of order, with the lowest latency", 3]
    ],
    e: "Strong gives linearizable reads. Bounded staleness limits lag to K versions or T time. Session (the default) guarantees read-your-writes within a session. Eventual offers no ordering guarantee but the best performance."
  },
  {
    t: "complete",
    q: "To use an Azure Storage account as a data lake with real directories and POSIX ACLs, enable the {0} on the account.",
    b: [
      { o: ["hierarchical namespace", "static website", "large file shares", "blob versioning"], a: 0 }
    ],
    e: "Enabling the hierarchical namespace turns Blob Storage into Azure Data Lake Storage Gen2, with directories, atomic renames and POSIX-style ACLs."
  },
  {
    t: "complete",
    q: "In Azure Cosmos DB, throughput is provisioned and measured in {0}.",
    b: [
      { o: ["request units (RUs)", "DTUs", "vCores", "capacity units (CUs)"], a: 0 }
    ],
    e: "Request units normalise the CPU, memory and I/O cost of operations. DTUs and vCores are Azure SQL Database purchasing models, and capacity units measure Microsoft Fabric capacity."
  },
  {
    t: "complete",
    q: "An {0} blob is optimised for adding data to the end, such as logs, while a {1} blob is optimised for random reads and writes, such as virtual machine disks.",
    b: [
      { o: ["append", "block", "page"], a: 0 },
      { o: ["append", "block", "page"], a: 2 }
    ],
    e: "Append blobs only allow adding blocks to the end, which suits logging. Page blobs are collections of 512-byte pages for random access, used for VM disks. Block blobs suit general files."
  },
  {
    t: "complete",
    q: "Storage that keeps copies in three availability zones in the primary region and also replicates to a secondary region is {0}.",
    b: [
      { o: ["geo-zone-redundant storage (GZRS)", "zone-redundant storage (ZRS)", "geo-redundant storage (GRS)", "locally redundant storage (LRS)"], a: 0 }
    ],
    e: "GZRS combines ZRS in the primary region with asynchronous replication to a secondary region. GRS uses LRS (one datacenter) in the primary region, ZRS stays in one region, and LRS stays in one datacenter."
  },
  {
    q: "Which statement describes Azure Files?",
    o: ["Managed cloud file shares that clients can mount over SMB or NFS", "Object storage for unstructured data that is accessed only over HTTP", "A NoSQL key-value store for structured, non-relational entities", "A relational database service for transactional application data"],
    a: [0],
    e: "Azure Files offers fully managed file shares that behave like a network file server. Object storage is Blob Storage, the key-value store is Table storage, and relational data belongs in Azure SQL or open-source database services."
  },
  {
    q: "Which Azure Files tier uses SSD storage and is designed for workloads that need low latency and high IOPS?",
    o: ["Premium", "Transaction optimized", "Hot", "Cool"],
    a: [0],
    e: "Premium file shares run on SSDs for consistent low latency. Transaction optimized, hot and cool are standard (HDD-based) tiers that trade performance for lower cost."
  },
  {
    q: "Which two are common use cases for Azure Files? (Choose two.)",
    o: ["Replacing or supplementing on-premises file servers", "Sharing application settings across several virtual machines", "Storing JSON documents with global low-latency writes", "Running analytical SQL queries over Parquet files", "Storing relational tables linked by foreign keys"],
    a: [0, 1],
    e: "Azure Files is used for lift-and-shift file shares and for shared configuration or tools across VMs. Global JSON storage suits Cosmos DB, Parquet analytics suits a data lake, and relational tables suit a database."
  },
  {
    t: "complete",
    q: "Windows clients mount Azure Files shares using the {0} protocol.",
    b: [
      { o: ["SMB", "MQTT", "AMQP", "ODBC"], a: 0 }
    ],
    e: "Server Message Block (SMB) is the Windows file sharing protocol. Linux and macOS can also use SMB, and premium shares support NFS. MQTT and AMQP are messaging protocols, and ODBC is a database connectivity standard."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAn Azure Files share can be mounted by several virtual machines at the same time.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. File shares are designed for shared access, so many clients can mount the same share concurrently, just like an on-premises file server."
  },
  {
    q: "Which scenario is BEST suited to Azure Table storage?",
    o: ["Storing large volumes of device metadata looked up by device ID at low cost", "Running complex queries that join customer, order and product tables", "Storing video files that are streamed to users around the world", "Hosting a file share that users map as a network drive"],
    a: [0],
    e: "Table storage is a cheap, scalable key-attribute store for structured, non-relational data retrieved by key. Joins need a relational database, video belongs in Blob Storage, and shares belong in Azure Files."
  },
  {
    q: "Which property of an Azure Table storage entity determines which partition it is stored in?",
    o: ["PartitionKey", "RowKey", "Timestamp"],
    a: [0],
    k: 1,
    e: "Entities with the same PartitionKey are stored together in one partition. RowKey identifies the entity within its partition, and Timestamp is maintained by the service."
  },
  {
    q: "Which two statements about Azure Table storage are correct? (Choose two.)",
    o: ["Entities can have flexible sets of properties", "It is a low-cost option for large volumes of key-value data", "It enforces foreign key relationships between tables", "It supports SQL joins across multiple tables", "Clients mount it as a file share using SMB"],
    a: [0, 1],
    e: "Table storage is schemaless beyond its key properties and is inexpensive at scale. It has no foreign keys or joins, and it is not a file share."
  },
  {
    t: "complete",
    q: "In Azure Table storage, entities are grouped into partitions by their {0} and uniquely identified within a partition by their {1}.",
    b: [
      { o: ["PartitionKey", "RowKey", "Timestamp"], a: 0 },
      { o: ["PartitionKey", "RowKey", "ETag"], a: 1 }
    ],
    e: "The PartitionKey decides placement and scale-out, and the RowKey is unique within that partition, so together they form the entity's unique key."
  },
  {
    q: "Which Azure Cosmos DB API stores key-value entities and works with the Azure Table storage SDKs?",
    o: ["API for Table", "API for NoSQL", "API for MongoDB", "API for Apache Gremlin"],
    a: [0],
    e: "API for Table lets applications written for Azure Table storage move to Cosmos DB with minimal changes. NoSQL and MongoDB are document APIs, and Gremlin is the graph API."
  },
  {
    t: "yesno",
    q: "Consider these statements about Azure Cosmos DB APIs.",
    s: [
      ["The API for MongoDB lets existing MongoDB applications connect with their current drivers.", true],
      ["The API for Apache Gremlin is used to query graph data.", true],
      ["The API for NoSQL requires data to follow a fixed relational schema.", false]
    ],
    e: "1 Yes: the MongoDB API is wire-protocol compatible. 2 Yes: Gremlin traverses vertices and edges. 3 No: API for NoSQL stores schema-free JSON documents."
  },
  {
    t: "complete",
    q: "To store graph data and traverse relationships in Azure Cosmos DB, use the API for {0}.",
    b: [
      { o: ["Apache Gremlin", "Apache Cassandra", "Table", "MongoDB"], a: 0 }
    ],
    e: "The Gremlin API models data as vertices and edges and uses the Gremlin traversal language. Cassandra is column-family, Table is key-value, and MongoDB is document-based."
  },
  {
    t: "match",
    q: "In Azure Cosmos DB, a 'container' has a different name depending on the API. Match each API to its name for a container.",
    c: ["Collection", "Table", "Graph", "Container"],
    s: [
      ["API for MongoDB", 0],
      ["API for Apache Cassandra", 1],
      ["API for Apache Gremlin", 2],
      ["API for NoSQL", 3]
    ],
    e: "MongoDB calls containers collections, Cassandra calls them tables (inside keyspaces), Gremlin calls them graphs, and API for NoSQL uses containers. API for Table also calls them tables."
  },
  {
    t: "match",
    q: "Match each Azure Cosmos DB API to the name it uses for a single record.",
    c: ["Item", "Document", "Row", "Node or edge"],
    s: [
      ["API for NoSQL", 0],
      ["API for MongoDB", 1],
      ["API for Apache Cassandra", 2],
      ["API for Apache Gremlin", 3]
    ],
    e: "API for NoSQL (and API for Table) store items, MongoDB stores documents, Cassandra stores rows, and Gremlin stores vertices (nodes) and edges."
  },
  {
    q: "In the API for Apache Cassandra, which term corresponds to a Cosmos DB database?",
    o: ["Keyspace", "Collection", "Graph", "Partition"],
    a: [0],
    e: "Cassandra groups tables into keyspaces, which map to Cosmos DB databases. Collection is MongoDB's term for a container, graph is Gremlin's, and a partition is a unit of data distribution."
  },
  {
    t: "match",
    q: "Match each statement to the Azure Cosmos DB capacity mode it describes.",
    c: ["Provisioned throughput", "Serverless"],
    s: [
      ["Billed for the RU/s you reserve, whether or not you use them", 0],
      ["Billed only for the request units you actually consume", 1],
      ["Best for continuous, predictable traffic", 0],
      ["Best for intermittent or unpredictable traffic", 1],
      ["Can replicate the account to multiple Azure regions", 0]
    ],
    e: "Provisioned throughput reserves RU/s (fixed or autoscale) and supports multi-region accounts. Serverless needs no capacity planning and bills per RU consumed, but runs in a single region and has lower per-container storage limits."
  },
  {
    t: "yesno",
    q: "Consider these statements about partitioning in Azure Cosmos DB.",
    s: [
      ["Items with the same partition key value belong to the same logical partition.", true],
      ["You must create and rebalance physical partitions yourself.", false],
      ["Cosmos DB scales mainly by adding partitions across servers (horizontal scaling).", true]
    ],
    e: "1 Yes: a logical partition is the set of items sharing a partition key value. 2 No: Cosmos DB creates, manages and rebalances physical partitions automatically. 3 Yes: partitioning lets Cosmos DB scale out horizontally."
  },
  {
    q: "Which feature of Azure Cosmos DB lets you add or remove Azure regions without pausing or redeploying your application?",
    o: ["Turnkey global distribution", "Elastic pools", "Hierarchical namespace", "Read scale-out"],
    a: [0],
    e: "Cosmos DB replicates data to any Azure region you add, with a click and no downtime, and can enable multi-region writes. Elastic pools and read scale-out belong to Azure SQL Database, and the hierarchical namespace belongs to Data Lake Storage Gen2."
  },
  {
    t: "yesno",
    q: "Consider these statements about Azure Storage accounts.",
    s: [
      ["You need a storage account before you can create blob containers, file shares, queues or tables.", true],
      ["Azure managed disks are created inside a storage account that you manage.", false],
      ["A single storage account can hold blob containers and file shares at the same time.", true]
    ],
    e: "1 Yes: the storage account is the top-level resource for Blob, Files, Queue and Table storage. 2 No: managed disks are managed by Azure without a storage account you look after (only legacy unmanaged disks used one). 3 Yes: a general-purpose v2 account holds all four services."
  },
  {
    q: "How many copies of your data does geo-redundant storage (GRS) keep in total?",
    o: ["Six: three in the primary region and three in the secondary region", "Three: all in a single datacenter in the primary region", "Three: one in each availability zone of the primary region", "Two: one in the primary region and one in the secondary region"],
    a: [0],
    e: "GRS keeps three copies with LRS in the primary region and asynchronously copies data to the paired secondary region, which keeps three more with LRS. LRS keeps three copies in one datacenter, and ZRS keeps three across zones."
  },
  {
    q: "For a new application that needs a NoSQL key-value store with global distribution and guaranteed low latency, which service does Microsoft recommend over Azure Table storage?",
    o: ["Azure Cosmos DB (for example, API for Table)", "Azure Files premium tier", "Azure SQL Database serverless", "Azure Queue storage"],
    a: [0],
    e: "Table storage is a very basic, low-cost NoSQL store. When you need global distribution, automatic indexing of all properties and latency SLAs, Cosmos DB (API for Table keeps the Table storage programming model) is preferred."
  },
  {
    q: "Which type of Azure managed disk is recommended for I/O-intensive workloads such as SAP HANA and top-tier transactional databases?",
    o: ["Ultra disk", "Standard HDD", "Standard SSD", "Premium SSD v1 for backups"],
    a: [0],
    e: "Ultra disks give the highest IOPS and throughput with sub-millisecond latency for the most demanding workloads. Premium SSD suits most production workloads, Standard SSD suits web servers and dev/test, and Standard HDD suits backups and infrequent access."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nMicrosoft recommends managed disks rather than unmanaged disks for Azure virtual machines.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. With managed disks Azure handles the underlying storage, scale and availability. Unmanaged disks are the older model, where you store VHDs as page blobs in a storage account you manage yourself."
  },
  {
    q: "Which storage service lets a web application hand off order-processing work to a background service asynchronously, so the two are decoupled?",
    o: ["Azure Queue Storage", "Azure Table storage", "Azure Files", "Azure Disk Storage"],
    a: [0],
    e: "Queue Storage holds messages that one component adds and another processes later, decoupling them and smoothing out spikes. Table storage holds key-value entities, Azure Files provides shares, and Disk Storage provides VM disks."
  }
]);
