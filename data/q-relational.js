/* Domain 2: Identify considerations for relational data on Azure (20–25%) */
DP900.add(2, 'rel-', [
  {
    q: "Which Azure SQL option gives you full control over the operating system and SQL Server instance, including the ability to install other software on the same server?",
    o: ["SQL Server on Azure Virtual Machines", "Azure SQL Database", "Azure SQL Managed Instance", "Azure SQL Database elastic pool"],
    a: [0],
    e: "SQL Server on Azure VMs is infrastructure as a service (IaaS). You manage the OS, patching and the SQL Server installation, and you can install anything else on the VM. Azure SQL Database and Managed Instance are platform as a service (PaaS): Microsoft manages the OS and engine, so you cannot access the host."
  },
  {
    q: "Which Azure SQL offering is platform as a service (PaaS) and provides near 100% compatibility with on-premises SQL Server, including SQL Server Agent and cross-database queries?",
    o: ["Azure SQL Managed Instance", "Azure SQL Database single database", "SQL Server on Azure Virtual Machines", "Azure Database for PostgreSQL"],
    a: [0],
    e: "Azure SQL Managed Instance is a fully managed SQL Server instance with near-complete engine compatibility: SQL Server Agent, cross-database queries, CLR, Database Mail, linked servers and native backup/restore. It is designed for lift-and-shift migrations with minimal changes. Azure SQL Database is scoped to a single database and lacks several instance-level features."
  },
  {
    q: "You are building a new cloud application that needs a single relational database with automatic patching, backups and high availability, and you want the least administration. Which service should you use?",
    o: ["Azure SQL Database", "SQL Server on Azure Virtual Machines", "SQL Server on an on-premises server", "Azure Synapse Analytics dedicated SQL pool"],
    a: [0],
    e: "Azure SQL Database is a fully managed PaaS database designed for modern cloud applications. Microsoft handles patching, backups and high availability. A VM requires you to manage the OS and SQL Server, and a Synapse dedicated SQL pool is a data warehouse for analytics rather than an application database."
  },
  {
    q: "A company wants to migrate dozens of on-premises SQL Server databases that use SQL Server Agent jobs and cross-database queries to Azure, with minimal code changes and without managing the operating system. Which option should they choose?",
    o: ["Azure SQL Managed Instance", "Azure SQL Database single database", "SQL Server on Azure Virtual Machines", "Azure Cosmos DB for NoSQL"],
    a: [0],
    e: "Managed Instance supports instance-scoped features like SQL Agent and cross-database queries, so migrations need minimal changes, and it is PaaS, so no OS management. A single Azure SQL Database does not support SQL Agent or cross-database queries in the same way, and a VM would require OS management."
  },
  {
    q: "Which deployment option in Azure SQL Database lets multiple databases share a pool of compute resources, which is cost-effective when databases have varying, unpredictable usage peaks?",
    o: ["Elastic pool", "Hyperscale", "Managed Instance", "Serverless single database"],
    a: [0],
    e: "An elastic pool lets many databases share a fixed set of resources (eDTUs or vCores). Because their peaks happen at different times, you pay for the pool rather than provisioning every database for its own peak. This is common for multi-tenant SaaS apps with a database per customer."
  },
  {
    q: "Which Azure SQL Database compute tier automatically scales compute based on workload and can pause the database during inactive periods, so you pay only for storage while it is paused?",
    o: ["Serverless", "Provisioned", "Business Critical", "Elastic pool"],
    a: [0],
    e: "The serverless compute tier auto-scales within a configured vCore range and can auto-pause after a period of inactivity. While paused, you are billed only for storage. It suits intermittent or unpredictable workloads such as dev/test databases."
  },
  {
    q: "Which Azure SQL Database service tier supports databases of up to 128 TB and allows fast scaling of compute and near-instant backups?",
    o: ["Hyperscale", "General Purpose", "Basic", "Standard (DTU)"],
    a: [0],
    e: "Hyperscale uses a distributed architecture with page servers and log service, so storage can grow to around 128 TB and backups are snapshot-based and almost instant regardless of size. General Purpose, Basic and Standard have much lower size limits."
  },
  {
    q: "Which two purchasing models are available for Azure SQL Database? (Choose two.)",
    o: ["DTU-based", "vCore-based", "Request unit (RU)-based", "Capacity unit (CU)-based", "Per-user licensing"],
    a: [0, 1],
    e: "Azure SQL Database offers the DTU model (a bundled measure of compute, storage and I/O) and the vCore model (choose cores, memory and storage independently, with options like Azure Hybrid Benefit). Request units are the throughput currency of Azure Cosmos DB, and capacity units are used by Microsoft Fabric. Per-user licensing is used by products such as Power BI Pro, not Azure SQL Database."
  },
  {
    q: "Which statement about the vCore purchasing model for Azure SQL Database is correct?",
    o: ["You size compute and storage separately and can apply existing licences with Azure Hybrid Benefit", "It bundles CPU, memory and I/O into a single blended measure that you scale in fixed steps", "It is only available for Azure Database for MySQL and Azure Database for PostgreSQL", "It does not support zone-redundant high availability or readable secondary replicas"],
    a: [0],
    e: "The vCore model lets you size compute (cores and memory) and storage separately, select hardware generation, and use Azure Hybrid Benefit for licence savings. The DTU model is the bundled measure."
  },
  {
    q: "Which two statements describe PaaS database services such as Azure SQL Database? (Choose two.)",
    o: ["Microsoft manages operating system patching", "Built-in high availability is included", "You can log in to the host operating system with Remote Desktop", "You must install SQL Server cumulative updates yourself", "You must configure the storage hardware RAID yourself"],
    a: [0, 1],
    e: "With PaaS, the platform handles OS and engine patching, automated backups and built-in high availability. You have no access to the host OS, you never install engine updates yourself, and you never configure hardware. That level of control requires IaaS (SQL Server on Azure VMs)."
  },
  {
    q: "Which Azure SQL option is best when an application depends on a specific older version of SQL Server or on third-party software that must be installed on the database server?",
    o: ["SQL Server on Azure Virtual Machines", "Azure SQL Database (single database)", "Azure SQL Managed Instance", "Azure Database for PostgreSQL flexible server"],
    a: [0],
    e: "Only an IaaS VM lets you choose the exact SQL Server version and install additional software on the same machine. PaaS services always run the latest engine version and do not allow host access."
  },
  {
    q: "Which Azure services provide fully managed open-source relational database engines? (Choose two.)",
    o: ["Azure Database for PostgreSQL", "Azure Database for MySQL", "Azure Cosmos DB for NoSQL", "Azure Table storage", "Azure SQL Managed Instance"],
    a: [0, 1],
    e: "Azure Database for PostgreSQL and Azure Database for MySQL (flexible server) are managed PaaS versions of these open-source relational engines. Cosmos DB for NoSQL and Table storage are non-relational services. Azure SQL Managed Instance is relational but runs Microsoft's SQL Server engine, which is not open source."
  },
  {
    q: "A company runs a PHP web application that uses a LAMP stack with a MySQL database. They want to move it to Azure with minimal code changes and no server management. Which database service should they use?",
    o: ["Azure Database for MySQL flexible server", "Azure SQL Database (General Purpose)", "Azure Cosmos DB for MongoDB vCore", "Azure Database for PostgreSQL flexible server"],
    a: [0],
    e: "Azure Database for MySQL is a managed MySQL service, so the application keeps the same engine and drivers. Moving to Azure SQL Database would require code changes because the SQL dialect and drivers differ."
  },
  {
    q: "Which open-source relational engine is known for extensibility, supporting custom data types, extensions such as PostGIS for geospatial data, and procedural code in multiple languages?",
    o: ["PostgreSQL", "MySQL", "MariaDB", "SQLite"],
    a: [0],
    e: "PostgreSQL is a hybrid relational-object database known for extensibility: custom types, operators, and extensions like PostGIS (geospatial), pgvector (vector search) and many others. Azure Database for PostgreSQL supports many popular extensions."
  },
  {
    q: "What is the deployment option for Azure Database for PostgreSQL and Azure Database for MySQL that gives you control over maintenance windows, zone-redundant high availability and the ability to stop and start the server?",
    o: ["Flexible server", "Single server", "Managed instance", "Elastic pool"],
    a: [0],
    e: "Flexible server is the current deployment model for Azure Database for PostgreSQL and MySQL. It offers custom maintenance windows, zone-redundant HA, burstable compute and stop/start to save cost. Single server has been retired."
  },
  {
    q: "By default, how does Azure SQL Database protect data at rest?",
    o: ["Transparent data encryption (TDE) is enabled automatically", "Data is not encrypted unless you configure Always Encrypted", "Data is encrypted only during backups", "Encryption requires installing a third-party tool"],
    a: [0],
    e: "Transparent data encryption encrypts database files, logs and backups at rest and is enabled by default for new Azure SQL databases. It is transparent to applications. Always Encrypted is a separate feature that protects specific columns even from database administrators."
  },
  {
    q: "Which Azure SQL feature encrypts sensitive columns, such as credit card numbers, so that the data is never visible in plain text inside the database engine, even to administrators?",
    o: ["Always Encrypted", "Transparent data encryption", "Dynamic data masking", "Row-level security"],
    a: [0],
    e: "Always Encrypted encrypts data in the client driver, and the keys never reach the database engine, so DBAs and cloud operators cannot see plaintext values. TDE protects data at rest but the engine can read it. Dynamic data masking only hides values in query results for non-privileged users."
  },
  {
    q: "Which feature hides part of a sensitive value in query results, for example showing an email address as aXXX@XXXX.com to non-privileged users, without changing the stored data?",
    o: ["Dynamic data masking", "Always Encrypted", "Transparent data encryption", "Auditing"],
    a: [0],
    e: "Dynamic data masking applies a masking rule at query time so non-privileged users see obfuscated values while the underlying data is unchanged. It is a convenience control rather than strong encryption."
  },
  {
    q: "A multi-tenant application stores all customers' rows in one table. You need to ensure that each customer can only see their own rows, enforced by the database. Which feature should you use?",
    o: ["Row-level security", "Dynamic data masking", "Transparent data encryption", "Column-level encryption"],
    a: [0],
    e: "Row-level security uses predicate functions to filter which rows a user can read or modify, based on the user or session context (such as TenantId). Masking and encryption do not restrict which rows are returned."
  },
  {
    q: "What is the default network protection for a new Azure SQL Database logical server?",
    o: ["The server-level firewall blocks all connections until you add rules or configure private access", "All internet traffic is allowed until you add deny rules for specific IP ranges", "Only connections from on-premises networks over ExpressRoute or VPN are allowed", "Only connections from other Azure services in the same subscription are allowed"],
    a: [0],
    e: "Azure SQL Database blocks all public access by default. You must create firewall rules for specific IP ranges, allow Azure services, or use virtual network rules or private endpoints to permit connections."
  },
  {
    q: "You need applications in an Azure virtual network to connect to Azure SQL Database using a private IP address, with no exposure to the public internet. What should you configure?",
    o: ["A private endpoint (Azure Private Link)", "A server-level firewall rule for 0.0.0.0", "Dynamic data masking", "Geo-replication"],
    a: [0],
    e: "A private endpoint gives the database a private IP address inside your VNet through Azure Private Link, so traffic stays on the Microsoft backbone and public access can be disabled. Firewall rules control public IP access."
  },
  {
    q: "Which identity service can be used to authenticate users to Azure SQL Database, enabling multifactor authentication and centrally managed identities?",
    o: ["Microsoft Entra ID", "Azure Key Vault", "Azure Monitor", "Microsoft Purview"],
    a: [0],
    e: "Azure SQL supports Microsoft Entra ID (formerly Azure Active Directory) authentication in addition to SQL authentication. Entra ID provides centralised identity management, MFA and managed identities for applications."
  },
  {
    q: "How long does Azure SQL Database keep automated backups for point-in-time restore by default?",
    o: ["7 days (configurable from 1 to 35)", "1 day (configurable up to 7)", "90 days (configurable up to 10 years)", "30 days (not configurable)"],
    a: [0],
    e: "Azure SQL Database takes automatic full, differential and log backups. The default point-in-time restore retention is 7 days, configurable up to 35 days. For longer retention (up to 10 years) you configure long-term retention (LTR)."
  },
  {
    q: "A developer accidentally deleted rows from an Azure SQL Database table 30 minutes ago. What is the simplest built-in way to recover the data?",
    o: ["Use point-in-time restore to create a copy of the database from before the deletion", "Open a support ticket and ask Microsoft to recover the deleted rows", "Restore the most recent long-term retention backup over the live database", "Use dynamic data masking to unhide the rows that were deleted"],
    a: [0],
    e: "Point-in-time restore uses automated backups to create a new database as of a specific moment within the retention period. You can then copy the missing rows back to the original database."
  },
  {
    q: "Which feature allows you to keep Azure SQL Database backups for up to 10 years to meet compliance requirements?",
    o: ["Long-term retention (LTR)", "Point-in-time restore", "Active geo-replication", "Elastic pools"],
    a: [0],
    e: "Long-term retention stores full backups in Azure Blob storage for up to 10 years, using weekly, monthly or yearly policies. Point-in-time restore covers only the short-term retention period (up to 35 days)."
  },
  {
    q: "Which Azure SQL feature creates readable secondary databases in other regions and supports a group-level failover with a single listener endpoint so applications do not need to change connection strings?",
    o: ["Failover groups", "Elastic pools", "Long-term retention", "Read scale-out"],
    a: [0],
    e: "Failover groups replicate a group of databases to another region and provide read-write and read-only listener endpoints that automatically point to the current primary after a failover. Active geo-replication also replicates to other regions but works per database without the shared listener."
  },
  {
    q: "What does geo-replication provide for Azure SQL Database?",
    o: ["Readable secondary copies of a database in other Azure regions", "Automatic encryption of every backup with customer-managed keys", "Compression of large tables using columnstore indexes", "Copies of query plans that the optimizer shares across regions"],
    a: [0],
    e: "Active geo-replication continuously replicates a database to up to four readable secondaries in the same or different regions. If the primary region fails, you can fail over to a secondary. Secondaries can also serve read-only workloads."
  },
  {
    q: "Which tools can you use to connect to Azure SQL Database and run T-SQL queries? (Choose two.)",
    o: ["SQL Server Management Studio (SSMS)", "The query editor in the Azure portal", "Azure Storage Explorer desktop app", "Power Automate cloud flows", "The AzCopy command-line utility"],
    a: [0, 1],
    e: "SSMS is the full-featured SQL Server management tool, and the Azure portal includes a browser-based query editor for quick queries. Visual Studio Code with the MSSQL extension and sqlcmd also work. Storage Explorer manages Azure Storage accounts, not SQL databases. AzCopy copies files to and from Azure Storage and cannot run queries."
  },
  {
    q: "Which tool would a database administrator typically use to manage Azure SQL Managed Instance, including configuring SQL Server Agent jobs?",
    o: ["SQL Server Management Studio", "Azure Storage Explorer", "Power BI Desktop", "Azure Data Studio's Power BI extension"],
    a: [0],
    e: "SSMS provides a rich interface for administering SQL Server, Azure SQL Database and Managed Instance, including SQL Agent jobs, security and performance monitoring."
  },
  {
    q: "What is an Azure SQL logical server?",
    o: ["A management container for databases that provides an endpoint, logins and firewall rules", "A virtual machine running SQL Server that you can sign in to with Remote Desktop", "A physical server in an Azure datacenter that is reserved for a single customer", "A gateway that lets on-premises applications reach databases over a private network"],
    a: [0],
    e: "A logical server (yourserver.database.windows.net) is a management construct that groups databases and elastic pools and holds server-level settings such as logins, firewall rules and auditing. It is not a VM you can sign in to."
  },
  {
    q: "Which service helps migrate on-premises SQL Server databases to Azure SQL Managed Instance with minimal downtime?",
    o: ["Azure Database Migration Service", "Azure Data Box", "Azure Site Recovery", "Azure Storage Mover"],
    a: [0],
    e: "Azure Database Migration Service orchestrates online (minimal downtime) and offline migrations from SQL Server and other engines to Azure SQL targets. The Azure SQL migration extension can assess readiness and start migrations."
  },
  {
    q: "Which Azure SQL option should you choose if you need to run SQL Server workloads on-premises or in other clouds, while managing them from Azure?",
    o: ["Azure Arc-enabled SQL Server", "Azure SQL Database Hyperscale", "Azure SQL Database serverless", "Azure Database for MySQL"],
    a: [0],
    e: "Azure Arc extends Azure management (inventory, security, governance and licensing) to SQL Server instances running anywhere. The other options run only in Azure."
  },
  {
    q: "Which statement about Azure SQL Database high availability is correct?",
    o: ["High availability is built in, with a 99.99% availability SLA or higher depending on tier", "You must configure a failover cluster of virtual machines yourself to get high availability", "High availability is only available when you choose the Hyperscale service tier", "High availability is only provided when you configure active geo-replication"],
    a: [0],
    e: "Every Azure SQL Database includes built-in high availability with replicas managed by the platform. The SLA is at least 99.99%, and zone-redundant Business Critical configurations offer up to 99.995%."
  },
  {
    q: "Which Azure SQL Database service tier provides the highest resilience and lowest I/O latency by using local SSD storage and multiple replicas, including a free readable secondary?",
    o: ["Business Critical", "General Purpose", "Basic", "Hyperscale"],
    a: [0],
    e: "Business Critical uses an Always On availability group-style architecture with several replicas on local SSD, giving low latency, fast failover and a built-in readable replica. General Purpose uses remote storage and is aimed at typical workloads at lower cost."
  },
  {
    q: "Which is a reason to choose SQL Server on Azure VMs instead of Azure SQL Managed Instance?",
    o: ["You need components that require OS access, such as SSRS on the same server", "You want Microsoft to patch the operating system and database engine for you", "You want automated backups and point-in-time restore with no configuration", "You want built-in high availability without managing a failover cluster"],
    a: [0],
    e: "VMs give OS-level access, so you can run components like SSRS, SSIS or third-party agents on the same server. Patching, automatic backups and not managing the engine are benefits of PaaS options."
  },
  {
    q: "In the shared responsibility model, who is responsible for applying operating system patches when you use SQL Server on an Azure VM?",
    o: ["The customer (automated patching tools are optional)", "Microsoft, as with Azure SQL Database", "Microsoft for the OS, the customer for SQL Server", "Nobody, because Azure VMs are patched in place automatically"],
    a: [0],
    e: "With IaaS the customer manages the guest OS and software. Azure offers tools such as the SQL IaaS Agent extension and Azure Update Manager to automate patching, but responsibility stays with the customer. In PaaS services Microsoft patches the OS and engine."
  },
  {
    q: "What does the following statement do?\n`CREATE TABLE Product (ProductID INT PRIMARY KEY, Name VARCHAR(50) NOT NULL, Price DECIMAL(10,2));`",
    o: ["Creates a table in which ProductID uniquely identifies each row and Name is required", "Creates a table in which ProductID and Name together form the primary key of each row", "Creates a view that returns ProductID, Name and Price for every product in the table", "Creates a table and inserts one row with the ProductID, Name and Price values given"],
    a: [0],
    e: "CREATE TABLE is a DDL statement defining columns and constraints. PRIMARY KEY makes ProductID unique and not null; NOT NULL requires Name to always have a value. Price can be NULL and stores up to 10 digits with 2 after the decimal point."
  },
  {
    q: "Which SQL statement adds a new row to a table?",
    o: ["INSERT INTO Customers (Name, City) VALUES ('Ana', 'Lisbon');", "UPDATE Customers SET Name = 'Ana', City = 'Lisbon';", "ALTER TABLE Customers ADD Name VARCHAR(50), City VARCHAR(50);", "SELECT 'Ana' AS Name, 'Lisbon' AS City INTO Customers;"],
    a: [0],
    e: "INSERT INTO ... VALUES adds rows. UPDATE changes existing rows, ALTER TABLE changes the table structure, and SELECT INTO creates a new table from a query result."
  },
  {
    q: "Which statement adds a new column named Phone to an existing table named Customers?",
    o: ["ALTER TABLE Customers ADD Phone VARCHAR(20);", "UPDATE Customers ADD Phone VARCHAR(20);", "INSERT INTO Customers (Phone) VALUES (NULL);", "CREATE COLUMN Phone ON Customers;"],
    a: [0],
    e: "ALTER TABLE is the DDL statement for changing a table's structure, including adding, altering and dropping columns."
  },
  {
    q: "Which type of JOIN returns all rows from the left table, plus matching rows from the right table, with NULLs where there is no match?",
    o: ["LEFT OUTER JOIN", "INNER JOIN", "CROSS JOIN", "FULL OUTER JOIN"],
    a: [0],
    e: "A LEFT (OUTER) JOIN keeps every row from the left table. An INNER JOIN returns only matching rows, a FULL OUTER JOIN keeps unmatched rows from both sides, and a CROSS JOIN returns every combination of rows."
  },
  {
    q: "You need a query that returns only customers who have placed at least one order. Which JOIN type between Customers and Orders is appropriate?",
    o: ["INNER JOIN", "LEFT OUTER JOIN", "FULL OUTER JOIN", "CROSS JOIN"],
    a: [0],
    e: "An INNER JOIN returns rows only where the join condition matches in both tables, so customers without orders are excluded. Use DISTINCT or GROUP BY if you want each customer listed once."
  },
  {
    q: "Which clause filters groups after aggregation, for example returning only categories with total sales above 10,000?",
    o: ["HAVING", "WHERE", "ORDER BY", "TOP"],
    a: [0],
    e: "WHERE filters individual rows before grouping; HAVING filters groups after aggregation, for example `GROUP BY Category HAVING SUM(Amount) > 10000`."
  },
  {
    q: "A database stores customer address details in every order row, so the same address appears many times. What problem can this cause?",
    o: ["Update anomalies: changing an address means updating many rows, and some may be missed", "Slower SELECT queries, because each order row has to be joined to an address table", "Weaker referential integrity, because addresses can no longer be used as foreign keys", "Larger transaction log backups, because addresses are encrypted separately in each row"],
    a: [0],
    e: "Duplicated data leads to update, insert and delete anomalies. Normalizing into separate Customers and Orders tables stores the address once, keeping it consistent."
  },
  {
    q: "Which is a benefit of using stored procedures in Azure SQL Database?",
    o: ["Users can be allowed to run the procedure without direct access to the underlying tables", "They store their results in a columnar format so later queries run faster", "They automatically replicate the database to a secondary region for recovery", "They remove the need for indexes because the query plan is compiled in advance"],
    a: [0],
    e: "Stored procedures encapsulate logic and can be secured separately: you can grant EXECUTE on the procedure without granting SELECT/UPDATE on tables. They also reduce network traffic and enable plan reuse."
  },
  {
    q: "Which statement about a clustered index is correct?",
    o: ["It determines the physical order in which rows are stored, so a table can have only one", "A table can have many clustered indexes, one for each column that is searched", "It is stored separately from the table data and points to rows, like a book's index", "It can only be created on character columns such as VARCHAR and NVARCHAR"],
    a: [0],
    e: "A clustered index sorts and stores the table's rows by the index key, so there can be only one per table. Non-clustered indexes are separate structures that point to the rows, and a table can have many."
  },
  {
    q: "Which Azure SQL Database feature continuously monitors queries and can automatically create indexes and force good query plans?",
    o: ["Automatic tuning", "Geo-replication", "Elastic jobs", "Dynamic data masking"],
    a: [0],
    e: "Automatic tuning uses built-in intelligence to identify performance issues and can automatically create or drop indexes and force the last known good plan when a regression is detected."
  },
  {
    q: "Which feature of Azure SQL Database records database events to an audit log in Azure Storage, Log Analytics or Event Hubs?",
    o: ["Auditing", "Transparent data encryption", "Elastic pools", "Query Store"],
    a: [0],
    e: "Azure SQL auditing tracks database events and writes them to an audit log, which helps with regulatory compliance and investigating suspicious activity."
  },
  {
    q: "Which Microsoft Defender capability for Azure SQL detects anomalous activities such as SQL injection attempts and unusual access patterns?",
    o: ["Advanced Threat Protection in Microsoft Defender for SQL", "Dynamic data masking", "Microsoft Purview data classification", "SQL auditing with Log Analytics"],
    a: [0],
    e: "Microsoft Defender for SQL includes vulnerability assessment and Advanced Threat Protection, which alerts on potential SQL injection, access from unusual locations and brute-force attacks."
  },
  {
    q: "Which TWO of the following are valid reasons to use Azure SQL Database elastic pools? (Choose two.)",
    o: ["You host many databases with low average usage but occasional unpredictable spikes", "You want to manage cost across a set of databases by sharing resources", "You need a single database that will grow larger than 100 TB of data", "You need to install monitoring software on the database server itself", "You have a single database with constant, predictable, high usage all day"],
    a: [0, 1],
    e: "Elastic pools are ideal for many databases with varied usage, sharing resources to reduce total cost. Very large single databases fit Hyperscale, and installing software requires a VM. A single database with steady load gains nothing from sharing a pool."
  },
  {
    q: "Which is a typical use of Azure SQL Database read scale-out?",
    o: ["Sending read-only reporting queries to a replica so they don't slow down the primary", "Splitting one database across multiple regions so each region can accept writes", "Encrypting the database so that read-only users cannot see sensitive columns", "Increasing the maximum storage size by adding read-only data files to the database"],
    a: [0],
    e: "Read scale-out lets connections with `ApplicationIntent=ReadOnly` be routed to a read-only replica (available in Premium, Business Critical and Hyperscale), offloading reporting workloads from the primary."
  },
  {
    q: "Which relational service on Azure is fully compatible with the open-source community edition of the engine and is often used for web applications such as WordPress and Drupal?",
    o: ["Azure Database for MySQL", "Azure SQL Managed Instance", "Azure Cosmos DB for Table", "Azure Synapse Analytics"],
    a: [0],
    e: "MySQL is widely used by LAMP-stack web apps and content management systems like WordPress and Drupal. Azure Database for MySQL provides it as a managed service."
  },
  {
    q: "Which TWO features are provided by Azure Database for PostgreSQL flexible server? (Choose two.)",
    o: ["Automated backups with point-in-time restore", "Zone-redundant high availability", "SQL Server Agent jobs for scheduled tasks", "Full T-SQL compatibility with SQL Server", "Azure SQL Database elastic pools"],
    a: [0, 1],
    e: "Azure Database for PostgreSQL flexible server includes automated backups, point-in-time restore and optional zone-redundant HA. SQL Server Agent and T-SQL belong to Microsoft SQL Server. Elastic pools are an Azure SQL Database feature."
  },
  {
    q: "What is Azure SQL Edge?",
    o: ["A small-footprint SQL engine for IoT and edge devices, with streaming and time-series support", "A front-end web server that caches Azure SQL Database queries for web applications", "A tier of Azure SQL Database that runs only at Azure edge locations near users", "A connector that lets Power BI query on-premises SQL Server through a gateway"],
    a: [0],
    e: "Azure SQL Edge is a lightweight SQL engine for edge devices, offering data streaming and time-series capabilities. Note that Microsoft has announced its retirement (September 2025), but the concept of SQL at the edge can still appear in study material."
  },
  {
    q: "Which service would you use to migrate a large on-premises MySQL database to Azure Database for MySQL flexible server with minimal downtime?",
    o: ["Azure Database Migration Service", "Azure Data Box Disk", "Azure Site Recovery", "Azure Storage Mover"],
    a: [0],
    e: "Azure Database Migration Service supports online migrations to Azure Database for MySQL and PostgreSQL, continuously replicating changes until cutover to minimise downtime."
  },
  {
    q: "In Azure SQL Database, which pricing model uses a blended measure of CPU, memory, reads and writes?",
    o: ["DTU (database transaction unit)", "vCore (virtual core)", "RU (request unit)", "CU (capacity unit)"],
    a: [0],
    e: "DTUs bundle compute, memory and I/O into one simple measure with preconfigured tiers (Basic, Standard, Premium). vCore lets you choose resources independently. Request Units are Cosmos DB's throughput measure."
  },
  {
    q: "Which TWO tasks are the customer's responsibility when using Azure SQL Database? (Choose two.)",
    o: ["Designing the schema and indexes", "Managing user access and permissions", "Patching the underlying operating system", "Replacing failed hardware", "Upgrading the database engine to new versions"],
    a: [0, 1],
    e: "Even in PaaS, customers own their data, schema, query design, indexing and access control. Microsoft handles OS patching, hardware and the underlying infrastructure. Microsoft keeps the Azure SQL Database engine up to date, so there are no version upgrades for you to run."
  },
  {
    q: "Which statement about Azure SQL Database and SQL Server on-premises is correct?",
    o: ["Azure SQL Database always runs the latest engine, so new features arrive without upgrades", "Azure SQL Database requires you to install cumulative updates during a maintenance window", "Azure SQL Database lets you choose and pin any SQL Server version, such as SQL Server 2012", "Azure SQL Database supports T-SQL but not features such as JSON functions or temporal tables"],
    a: [0],
    e: "Azure SQL Database is evergreen: Microsoft continually updates the engine, so you never perform version upgrades. You can still set database compatibility levels to preserve older behaviour."
  },
  {
    q: "You have a reporting workload and want to query relational data in Azure SQL Database from Power BI. Which connectivity requirement must be met?",
    o: ["Power BI must be allowed through the database's network rules, or use a gateway", "The database must first be mirrored into Microsoft Fabric before Power BI can read it", "The database must use the Hyperscale service tier to support Power BI connections", "Power BI must connect through Azure Data Factory, which copies the data into Excel"],
    a: [0],
    e: "Azure SQL Database blocks connections by default, so you must permit access via firewall rules (such as 'Allow Azure services') or, for private networks, use a virtual network data gateway or on-premises data gateway."
  },
  {
    q: "Which Azure SQL Managed Instance characteristic is true?",
    o: ["It is deployed into a subnet of your Azure virtual network", "It runs on a virtual machine whose operating system you patch yourself", "It supports only a single database, like Azure SQL Database", "It is reached only through a public endpoint with no VNet option"],
    a: [0],
    e: "Managed Instance is deployed inside a dedicated subnet of your virtual network, providing network isolation and private IP connectivity, which suits enterprises connecting from on-premises via VPN or ExpressRoute."
  },
  {
    q: "A company has existing SQL Server licences with Software Assurance. Which benefit lets them reduce the cost of Azure SQL vCore-based services?",
    o: ["Azure Hybrid Benefit", "Reserved instances for Cosmos DB", "Free tier", "Dev/test subscription only"],
    a: [0],
    e: "Azure Hybrid Benefit lets customers apply existing SQL Server licences (with Software Assurance or subscriptions) to Azure SQL Database (vCore), Managed Instance and SQL Server on Azure VMs, reducing licence costs."
  },
  {
    q: "Which TWO scenarios are good candidates for Azure SQL Database serverless? (Choose two.)",
    o: ["A development database used only during business hours", "A new application with unknown and intermittent usage", "A mission-critical database with constant high CPU usage 24/7", "A database that needs SQL Server Agent jobs", "A large data warehouse needing massively parallel processing across many nodes"],
    a: [0, 1],
    e: "Serverless suits intermittent, unpredictable usage, because it auto-scales and auto-pauses when idle. Constant heavy workloads are cheaper on provisioned compute, and SQL Agent requires Managed Instance or a VM. MPP data warehousing is the job of Fabric Warehouse or Synapse dedicated SQL pools."
  },
  {
    q: "Which is NOT a relational database service on Azure?",
    o: ["Azure Cosmos DB for NoSQL", "Azure SQL Database", "Azure Database for PostgreSQL", "Azure SQL Managed Instance"],
    a: [0],
    e: "Azure Cosmos DB for NoSQL is a non-relational document database. The other three are relational database services."
  },
  {
    q: "Which column data type is appropriate for storing monetary amounts precisely in Azure SQL Database?",
    o: ["DECIMAL", "FLOAT", "REAL", "VARCHAR"],
    a: [0],
    e: "DECIMAL/NUMERIC store exact values with fixed precision and scale, avoiding rounding errors. FLOAT is approximate and can introduce small rounding differences, which is undesirable for money."
  },
  {
    q: "What does a NOT NULL constraint do?",
    o: ["Requires a column to always contain a value", "Prevents duplicate values in a column", "Links a column to another table", "Sets a default value when none is provided"],
    a: [0],
    e: "NOT NULL means every row must provide a value for that column. UNIQUE prevents duplicates, FOREIGN KEY links tables, and DEFAULT provides a value when none is given."
  },
  {
    q: "Which constraint ensures that no two rows have the same value in a column, but is not necessarily the primary key?",
    o: ["UNIQUE", "CHECK", "DEFAULT", "FOREIGN KEY"],
    a: [0],
    e: "A UNIQUE constraint prevents duplicate values, for example on an Email column, while the primary key might be a separate CustomerID. CHECK enforces a condition such as `Price >= 0`."
  },
  {
    q: "Which constraint would ensure that a Quantity column only accepts values greater than zero?",
    o: ["CHECK (Quantity > 0)", "UNIQUE (Quantity)", "DEFAULT 0", "PRIMARY KEY (Quantity)"],
    a: [0],
    e: "A CHECK constraint enforces a Boolean condition on column values. It maintains data integrity by rejecting invalid inserts or updates."
  },
  {
    q: "Which of the following is a benefit of using views?",
    o: ["They can simplify complex queries and restrict access to specific columns or rows", "They always store a physical copy of the data so that writes run faster", "They replace the need for base tables in a normalized database design", "They automatically encrypt the columns that they return to users"],
    a: [0],
    e: "Views encapsulate a query, presenting a simpler virtual table to users, and can expose only certain columns or rows for security. Standard views store no data; the underlying tables hold it."
  },
  {
    q: "A company needs a relational database for an application in Azure, but must run on PostgreSQL because the app uses PostgreSQL-specific features. Which service is MOST appropriate?",
    o: ["Azure Database for PostgreSQL flexible server", "Azure SQL Database", "Azure Cosmos DB for Apache Cassandra", "Azure Table storage"],
    a: [0],
    e: "Azure Database for PostgreSQL is the managed PostgreSQL service, so PostgreSQL features, extensions and drivers keep working. Azure SQL Database runs the Microsoft SQL Server engine."
  },
  {
    q: "Which TWO are benefits of PaaS relational databases over IaaS? (Choose two.)",
    o: ["Lower administrative overhead", "Built-in high availability and automated backups", "Full control over the operating system", "Ability to choose any SQL Server version, including very old ones", "Ability to install third-party agents on the database server"],
    a: [0, 1],
    e: "PaaS reduces management effort and includes HA and backups by default. OS control and arbitrary versions are IaaS advantages. Installing software on the server is only possible with IaaS."
  },
  {
    q: "Which tool can be used from a command line to run T-SQL scripts against Azure SQL Database?",
    o: ["sqlcmd", "AzCopy", "kubectl", "Power Query"],
    a: [0],
    e: "sqlcmd is a command-line utility for running T-SQL statements and scripts against SQL Server and Azure SQL. AzCopy copies data to and from Azure Storage, and kubectl manages Kubernetes."
  },
  {
    q: "Which description matches Azure SQL Database 'Hyperscale' named replicas?",
    o: ["Extra read-only replicas that you can size independently for read workloads", "Additional copies of the backups that are kept for up to 10 years", "Copies of the database that are hosted with a different cloud provider", "Replicas in other regions that accept writes and resolve conflicts automatically"],
    a: [0],
    e: "Hyperscale supports high-availability replicas and named replicas: read-only compute that shares the same storage and can be sized independently for read scale-out. Writes still go to the single primary."
  },
  {
    q: "A company wants to reduce latency for a global user base while keeping a single writable relational database. Which approach fits Azure SQL Database?",
    o: ["Use active geo-replication to place readable secondaries close to users, sending writes to the primary", "Use multiple primaries in every region with automatic write conflict resolution", "Use Azure Table storage", "Use dynamic data masking"],
    a: [0],
    e: "Azure SQL Database has one writable primary. Geo-replicated readable secondaries can serve reads near users. Multi-region writes are a Cosmos DB feature, not an Azure SQL Database feature."
  },
  {
    q: "Which statement about SQL Server on Azure VMs licensing is correct?",
    o: ["You can use pay-as-you-go images that include the licence, or bring your own", "The SQL Server licence is always included free with the virtual machine", "Licensing is only available through the DTU purchasing model", "You must buy dedicated hardware from Microsoft to license SQL Server"],
    a: [0],
    e: "Azure Marketplace provides SQL Server images with the licence included (billed per minute), or you can bring your own licence using Azure Hybrid Benefit. The DTU model applies only to Azure SQL Database."
  },
  {
    q: "Which Azure relational service is designed to be accessed using T-SQL and supports features such as temporal tables, JSON functions and columnstore indexes?",
    o: ["Azure SQL Database", "Azure Database for MySQL", "Azure Database for PostgreSQL", "Azure Cosmos DB for Table"],
    a: [0],
    e: "Azure SQL Database is based on the SQL Server engine and uses T-SQL, supporting temporal tables, JSON functions, columnstore indexes, in-memory OLTP and more. MySQL and PostgreSQL use their own SQL dialects."
  },
  {
    q: "What is a temporal table in Azure SQL Database?",
    o: ["A table that keeps a full history of changes, so you can query data as it was at any time", "A table that is deleted automatically after a retention period that you configure", "A table that is stored only in memory and is cleared when the database restarts", "A table whose rows are partitioned by date so old data moves to cheaper storage"],
    a: [0],
    e: "System-versioned temporal tables keep a history table of every change with validity periods. You can query `FOR SYSTEM_TIME AS OF` a moment to see past values, which helps with auditing and recovering from accidental changes."
  },
  {
    q: "Which index type stores data by column and is best for analytical queries that scan and aggregate large tables?",
    o: ["Columnstore index", "Non-clustered rowstore index", "Unique index", "Filtered index"],
    a: [0],
    e: "Columnstore indexes store each column separately and compress them heavily, making large scans and aggregations much faster. They are the default storage for Azure Synapse dedicated SQL pool tables and are common in data warehouses."
  },
  {
    q: "You need to store an entire order with its line items in a single relational table row for fast retrieval, but still query the line items with T-SQL. Which Azure SQL capability can help?",
    o: ["Storing JSON in a column and querying it with functions such as OPENJSON", "Converting the table into a graph table with nodes for orders and edges for items", "Using dynamic data masking to hide line items until they are queried", "Storing each order as a separate blob in Azure Storage referenced by URL"],
    a: [0],
    e: "Azure SQL supports JSON functions (JSON_VALUE, OPENJSON, FOR JSON) and a native JSON data type, so semi-structured data can be stored in relational tables and still queried with T-SQL."
  },
  {
    q: "Which statement about relational data and Microsoft Fabric is correct?",
    o: ["Fabric includes a SQL database for operational workloads whose data is replicated to OneLake", "Fabric can store relational data only after it is converted to CSV files in OneLake", "Fabric includes only MySQL and PostgreSQL databases for operational workloads", "Fabric SQL databases run on virtual machines that you patch and back up yourself"],
    a: [0],
    e: "SQL database in Microsoft Fabric is a developer-friendly transactional database built on the Azure SQL Database engine. Its data is automatically mirrored into OneLake in Delta format, so it is ready for analytics without separate ETL."
  },
  {
    q: "Your company needs to move an on-premises SQL Server 2012 database to Azure quickly. It uses features not supported in PaaS and you must keep the exact engine version. What should you choose?",
    o: ["SQL Server on Azure Virtual Machines", "Azure SQL Database (serverless)", "Azure SQL Managed Instance", "Azure SQL Database Hyperscale"],
    a: [0],
    e: "When you must keep a specific engine version or use unsupported features, an Azure VM running SQL Server is the lift-and-shift option. PaaS options always run the current engine. Azure VMs can also get extended security updates for older SQL Server versions."
  },
  {
    q: "Which Azure SQL family option is described as 'best for modern cloud applications that want the newest stable SQL Server features with the least management'?",
    o: ["Azure SQL Database", "SQL Server on Azure Virtual Machines", "Azure SQL Managed Instance", "Azure Arc-enabled SQL Server"],
    a: [0],
    e: "Azure SQL Database is the most fully managed option and is aimed at new cloud-native applications. Managed Instance is aimed at migrations needing instance-level compatibility, and VMs at workloads needing OS control."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure SQL Database lets you sign in to the host server's operating system.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. Azure SQL Database is PaaS, and Microsoft manages the host operating system. If you need OS access, use SQL Server on Azure Virtual Machines."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure SQL Managed Instance supports SQL Server Agent jobs.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Managed Instance provides instance-level features, including SQL Server Agent, cross-database queries, Database Mail and linked servers. That is why it suits lift-and-shift migrations."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure Database for PostgreSQL uses T-SQL as its query language.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. Azure Database for PostgreSQL runs the open-source PostgreSQL engine and uses PostgreSQL's SQL dialect (with PL/pgSQL for procedural code). T-SQL is used by SQL Server and Azure SQL."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure SQL Database automatically backs up databases and supports point-in-time restore.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Azure SQL Database takes automated full, differential and log backups, with point-in-time restore retention of 7 days by default (configurable from 1 to 35 days)."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nYou are responsible for patching the operating system of SQL Server running on an Azure virtual machine.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. SQL Server on Azure VMs is IaaS, so the guest OS and SQL Server installation are the customer's responsibility. Azure provides tools to automate patching, but the responsibility remains yours."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nTransparent data encryption (TDE) prevents database administrators from viewing sensitive column values in query results.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. TDE encrypts data files and backups at rest, but the engine decrypts data when it is read, so administrators can still query it. To hide values from administrators, use Always Encrypted."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAn Azure SQL Database elastic pool lets several databases share a set of compute resources.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Databases in an elastic pool share eDTUs or vCores. This is cost-effective when the databases peak at different times."
  },
  {
    q: "A company needs a relational database service with near-100% compatibility with on-premises SQL Server and no OS management. Which service type is this?",
    o: ["Platform as a service (PaaS)", "Infrastructure as a service (IaaS)", "Software as a service (SaaS)"],
    a: [0],
    k: 1,
    e: "Azure SQL Managed Instance is PaaS: Microsoft manages the OS and engine while you manage databases. IaaS (SQL Server on a VM) requires OS management, and SaaS delivers a complete application rather than a database engine."
  },
  {
    q: "SQL Server running on an Azure virtual machine is an example of which cloud service model?",
    o: ["Infrastructure as a service (IaaS)", "Platform as a service (PaaS)", "Software as a service (SaaS)"],
    a: [0],
    k: 1,
    e: "With a VM you rent infrastructure and manage the OS and software yourself, which is IaaS. Azure SQL Database and Managed Instance are PaaS."
  },
  {
    q: "Which Azure SQL option is MOST suitable for a brand-new cloud application that needs one database and the least administration?",
    o: ["Azure SQL Database", "Azure SQL Managed Instance", "SQL Server on Azure Virtual Machines"],
    a: [0],
    e: "Azure SQL Database is the most fully managed choice and is built for modern cloud apps. Managed Instance is aimed at migrations needing instance-level features, and VMs at workloads needing OS control."
  },
  {
    q: "Which type of join returns only rows that have matching values in both tables?",
    o: ["INNER JOIN", "LEFT OUTER JOIN", "FULL OUTER JOIN"],
    a: [0],
    e: "INNER JOIN returns only matching rows. LEFT OUTER JOIN also keeps unmatched rows from the left table, and FULL OUTER JOIN keeps unmatched rows from both tables."
  },
  {
    q: "Which Azure SQL Database feature shows non-privileged users a partially hidden value, such as XXX-XX-1234, while the stored data stays unchanged?",
    o: ["Dynamic data masking", "Transparent data encryption", "Row-level security"],
    a: [0],
    e: "Dynamic data masking hides values in query results for non-privileged users. TDE encrypts data at rest, and row-level security controls which rows a user can see."
  },
  {
    q: "You need an Azure SQL database to keep running if one datacenter in its Azure region fails. Which option provides this protection?",
    o: ["Zone-redundant configuration", "Long-term backup retention", "Dynamic data masking", "Elastic pool"],
    a: [0],
    e: "A zone-redundant database places replicas in different availability zones within the region, so it survives the loss of one zone (datacenter). Backup retention, masking and elastic pools do not provide high availability."
  },
  {
    q: "Which TCP port do client applications use to connect to Azure SQL Database?",
    o: ["1433", "443", "3306", "5432"],
    a: [0],
    e: "Azure SQL Database listens on TCP port 1433, so outbound access to 1433 must be allowed. 3306 is the MySQL default, 5432 the PostgreSQL default, and 443 is HTTPS."
  },
  {
    q: "Which data type should you use in Azure SQL Database to store names that may contain characters from many languages, such as Japanese and Arabic?",
    o: ["NVARCHAR", "VARCHAR with a Latin1 collation", "INT", "BIT"],
    a: [0],
    e: "NVARCHAR stores Unicode text, which supports characters from all languages. VARCHAR with a non-UTF-8 collation stores characters from a single code page, and INT and BIT store numbers."
  },
  {
    q: "Which Azure Database for MySQL flexible server compute tier is the most cost-effective for development workloads that need full CPU only occasionally?",
    o: ["Burstable", "General Purpose", "Business Critical", "Memory Optimized"],
    a: [0],
    e: "The Burstable tier provides a low baseline of CPU with the ability to burst when needed, which suits dev/test and low-traffic apps. General Purpose and Business Critical provide sustained performance at a higher cost."
  },
  {
    q: "Which Azure Database for PostgreSQL feature creates read-only copies of the server to scale out read-heavy workloads?",
    o: ["Read replicas", "Point-in-time restore", "Maintenance windows", "Firewall rules"],
    a: [0],
    e: "Read replicas asynchronously copy data from the primary server, and applications can send read queries to them. Point-in-time restore recovers data, and maintenance windows and firewall rules do not add read capacity."
  },
  {
    q: "Which rule does a table in first normal form (1NF) follow?",
    o: ["Each column holds a single, atomic value and there are no repeating groups", "Every table has a composite primary key made of at least two columns", "All related data is stored together in one wide table to avoid joins", "Columns can contain comma-separated lists of values, such as phone numbers"],
    a: [0],
    e: "First normal form requires atomic values. For example, a PhoneNumbers column holding '555-1234, 555-9876' breaks 1NF; those values belong in a separate related table."
  },
  {
    q: "What does `SELECT DISTINCT City FROM Customers;` return?",
    o: ["Each city that appears in the Customers table, listed once", "Every customer row, sorted by city name", "The number of customers in each city", "Only the cities that have a single customer"],
    a: [0],
    e: "DISTINCT removes duplicate rows from the result, so each city appears once. Counting per city would need COUNT with GROUP BY."
  },
  {
    q: "What does `SELECT COUNT(*) FROM Orders WHERE Status = 'Open';` return?",
    o: ["The number of orders whose status is Open", "All columns of the orders that are open", "The total value of the open orders", "The first open order in the table"],
    a: [0],
    e: "COUNT(*) is an aggregate function that returns the number of rows matching the WHERE clause. Totalling values would use SUM, and returning the rows would use SELECT with column names."
  },
  {
    q: "Which T-SQL query returns the five most expensive products?",
    o: ["SELECT TOP 5 Name, Price FROM Products ORDER BY Price DESC;", "SELECT Name, Price FROM Products WHERE Price = 5;", "SELECT TOP 5 Name, Price FROM Products ORDER BY Price ASC;", "SELECT COUNT(5) FROM Products;"],
    a: [0],
    e: "TOP 5 limits the result to five rows, and ORDER BY Price DESC sorts from most to least expensive. Sorting ascending would return the cheapest products."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure SQL Database supports cross-database queries using three-part names (database.schema.table) in the same way as on-premises SQL Server.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. A single Azure SQL Database is scoped to one database, so three-part names that reference other databases are not supported. Azure SQL Managed Instance supports cross-database queries."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nThe Azure SQL Database Hyperscale tier supports databases larger than 4 TB.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Hyperscale supports databases up to about 128 TB. The General Purpose and Business Critical tiers have much smaller limits (around 4 TB for most configurations)."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nYou can stop an Azure Database for MySQL flexible server to stop paying for compute while it is not needed.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Flexible server supports stop and start. While the server is stopped you pay only for storage, which helps reduce dev/test costs."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nA view in Azure SQL Database always stores its own separate copy of the data.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. A standard view is a saved query. Data stays in the underlying tables and the view returns it when queried. Only indexed (materialised) views store results."
  },
  {
    q: "Which two Azure services are platform as a service (PaaS) relational databases? (Choose two.)",
    o: ["Azure SQL Database", "Azure Database for PostgreSQL", "SQL Server on Azure Virtual Machines", "Azure Cosmos DB for NoSQL", "Azure Table storage"],
    a: [0, 1],
    e: "Azure SQL Database and Azure Database for PostgreSQL are managed relational PaaS services. SQL Server on Azure VMs is IaaS, and Cosmos DB for NoSQL and Table storage are non-relational."
  },
  {
    q: "Which two statements about views are correct? (Choose two.)",
    o: ["A view can join several tables and present the result as a single virtual table", "A view can be queried with a SELECT statement just like a table", "A view automatically creates an index on every column that it returns", "A view stores a separate backup copy of the tables that it references", "A view encrypts the columns it returns so only its owner can read them"],
    a: [0, 1],
    e: "Views are saved queries that can combine tables and are queried like tables. They do not create indexes, back up data or encrypt columns."
  },
  {
    q: "Which two features are provided by Azure SQL Database without any additional configuration? (Choose two.)",
    o: ["Automated backups", "Transparent data encryption", "Long-term retention of backups for 10 years", "Private endpoint connectivity", "Always Encrypted for all columns"],
    a: [0, 1],
    e: "New Azure SQL databases get automated backups (with point-in-time restore) and TDE by default. Long-term retention, private endpoints and Always Encrypted must be configured."
  },
  {
    q: "Which category of SQL statement is `TRUNCATE TABLE Orders;` classified as in SQL Server and Azure SQL?",
    o: ["DDL", "DML", "DCL"],
    a: [0],
    k: 1,
    e: "Microsoft classifies TRUNCATE TABLE as a DDL statement. It removes all rows by deallocating data pages rather than deleting row by row, and it keeps the table structure. DELETE is the DML statement for removing rows."
  },
  {
    q: "Which Azure SQL Database service tier is the budget-oriented choice for most business workloads, using remote storage?",
    o: ["General Purpose", "Business Critical", "Hyperscale"],
    a: [0],
    e: "General Purpose offers balanced compute and storage at a lower cost using remote storage. Business Critical uses local SSD and extra replicas for low latency and resilience, and Hyperscale targets very large databases."
  },
  {
    q: "You need to find all customers who live in either London or Paris. Which WHERE clause is correct?",
    o: ["WHERE City IN ('London', 'Paris')", "WHERE City = 'London' AND City = 'Paris'", "WHERE City LIKE 'London, Paris'"],
    a: [0],
    e: "IN matches any value in the list. Using AND would require City to equal both values at once, which is impossible, and the LIKE pattern looks for the literal text 'London, Paris'."
  }
]);
