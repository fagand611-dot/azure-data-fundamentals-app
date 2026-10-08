/* Domain 1: Describe core data concepts (25–30%) */
DP900.add(1, 'core-', [
  {
    q: "A company stores customer records in a table where every row has the same columns: CustomerID, Name, Email and Phone. What type of data is this?",
    o: ["Structured data", "Semi-structured data", "Unstructured data", "Streaming data"],
    a: [0],
    e: "Structured data follows a fixed schema: every record has the same fields, so it fits naturally into rows and columns of a relational table. Semi-structured data (such as JSON) can vary in shape from record to record, and unstructured data (images, video, free text) has no field structure at all. 'Streaming' describes how data arrives, not its shape."
  },
  {
    q: "Which of the following is an example of semi-structured data?",
    o: ["A JSON document describing a customer and a variable list of addresses", "A table in an Azure SQL Database with fixed columns for each customer field", "An MP4 video file of a product demonstration recorded by marketing", "A scanned PDF image of a signed contract stored in Blob Storage"],
    a: [0],
    e: "Semi-structured data has some organisation (fields, tags or key-value pairs) but no rigid schema, so each document can contain different fields. JSON, XML and YAML are classic examples. A SQL table is structured; video files and scanned images are unstructured."
  },
  {
    q: "Which two types of data are considered unstructured? (Choose two.)",
    o: ["Audio recordings of support calls", "Photos uploaded by users", "A CSV file of sales orders", "An XML product catalog", "Rows in an Azure SQL Database table"],
    a: [0, 1],
    e: "Unstructured data has no predefined field structure. Audio, video, images and free-form documents are unstructured. A CSV file is structured (delimited rows with consistent columns), and XML is semi-structured (tagged, self-describing). Rows in a SQL table are structured data."
  },
  {
    q: "You need to store data in a format that uses tags to define elements, such as <customer><name>Ana</name></customer>. Which format is this?",
    o: ["XML", "JSON", "CSV", "Parquet"],
    a: [0],
    e: "XML (Extensible Markup Language) uses opening and closing tags to define elements and attributes. JSON uses braces and key-value pairs, CSV uses delimiters such as commas, and Parquet is a binary columnar format."
  },
  {
    q: "Which file format stores data in a columnar layout and is optimised for analytical queries that read only a subset of columns?",
    o: ["Parquet", "CSV", "JSON", "Avro"],
    a: [0],
    e: "Parquet is a columnar format: values for each column are stored together, which enables strong compression and lets queries read only the columns they need. Avro is a row-based binary format (good for write-heavy and streaming scenarios). CSV and JSON are row-oriented text formats."
  },
  {
    q: "Which file format is row-based, stores its schema in JSON alongside binary data, and is commonly used for serialising messages in streaming systems?",
    o: ["Avro", "Parquet", "ORC", "XML"],
    a: [0],
    e: "Apache Avro is a row-oriented format. Each file includes a JSON schema header and the data is stored in compact binary. That makes it good for writing individual records quickly, which is why it is popular for messaging and streaming (for example, Event Hubs Capture writes Avro). Parquet and ORC are columnar formats aimed at analytics."
  },
  {
    q: "Which file format was originally developed by Hortonworks for Apache Hive and organises data into columns grouped in 'stripes'?",
    o: ["ORC (Optimized Row Columnar)", "Avro (Apache Avro)", "CSV (comma-separated values)", "JSON (JavaScript Object Notation)"],
    a: [0],
    e: "ORC (Optimized Row Columnar) stores data in stripes, each holding columnar data plus statistics. It was built to optimise Apache Hive reads and writes. Avro is row-based; CSV and JSON are text formats."
  },
  {
    q: "What is a BLOB?",
    o: ["Binary Large Object: binary data such as an image or video stored as a single unit", "A table type that stores very large amounts of relational data in rows", "A type of index that speeds up queries by storing large column values separately on disk", "A JSON document stored in a document database such as Cosmos DB"],
    a: [0],
    e: "BLOB stands for Binary Large Object. It is a collection of binary data (images, video, audio, application files) stored as a single entity. In Azure, Blob Storage is the service designed to hold this kind of data at scale."
  },
  {
    q: "A delimited text file uses a comma to separate field values and a new line to separate records. Which file format is this?",
    o: ["CSV", "JSON", "XML", "Parquet"],
    a: [0],
    e: "CSV (comma-separated values) is a delimited text format. Each line is a record and commas separate the fields. It is simple and widely supported, but it carries no data types and is inefficient for large analytical workloads compared with Parquet."
  },
  {
    q: "Which type of database stores data as nodes and edges and is best suited for exploring relationships such as 'who knows whom' in a social network?",
    o: ["Graph database", "Key-value database", "Column-family database", "Relational database"],
    a: [0],
    e: "Graph databases model entities as nodes and relationships as edges, so traversing many-to-many relationships (friends of friends, organisational hierarchies, recommendation paths) is efficient. In Azure, Cosmos DB for Apache Gremlin provides a graph API."
  },
  {
    q: "Which type of non-relational database stores each item as a unique key paired with a value, where the value is opaque to the database?",
    o: ["Key-value database", "Graph database", "Document database", "Column-family database"],
    a: [0],
    e: "A key-value store looks up values only by key; the database does not interpret the value. This makes reads and writes extremely fast and simple. Document databases store values as documents (such as JSON) whose fields can be queried. Azure Table storage and Cosmos DB for Table are examples of key-value style stores."
  },
  {
    q: "Which type of non-relational database stores data in rows, groups related columns into families, and allows each row to have a different set of columns?",
    o: ["Column-family database", "Key-value database", "Document database", "Graph database"],
    a: [0],
    e: "Column-family (wide-column) databases such as Apache Cassandra organise columns into column families. Rows can be sparse and have different columns. In Azure, Cosmos DB for Apache Cassandra supports this model."
  },
  {
    q: "A document database is MOST suitable for which scenario?",
    o: ["Storing product catalog entries where each product has different attributes", "Enforcing referential integrity between orders, customers and payments", "Storing a social network of relationships between people and groups", "Running complex multi-table joins for financial reporting"],
    a: [0],
    e: "Document databases store self-describing documents (usually JSON) whose structure can vary, which suits catalogs where a laptop and a shirt have very different attributes. Referential integrity and multi-table joins are strengths of relational databases, and relationship-heavy data suits graph databases."
  },
  {
    q: "What is the main characteristic of an online transaction processing (OLTP) system?",
    o: ["It handles many small, fast reads and writes that record day-to-day business transactions", "It runs long, complex aggregate queries over many years of historical data for reporting", "It stores data only as compressed columnar files in a data lake", "It processes data once a day in large scheduled batches overnight"],
    a: [0],
    e: "OLTP systems capture business transactions (orders, payments, bookings) as they happen. They are optimised for many concurrent small inserts, updates and point reads, and they typically enforce ACID guarantees. Long-running aggregate queries over history describe analytical (OLAP) workloads."
  },
  {
    q: "Which workload is typically read-heavy, works with large volumes of historical data, and is used to support business decisions?",
    o: ["Analytical workload", "Transactional workload", "Key-value workload", "Message queue workload"],
    a: [0],
    e: "Analytical workloads aggregate and summarise historical data to find trends and support decisions. Data is usually loaded in bulk and then read many times. Transactional workloads are write-heavy and focus on recording individual operations."
  },
  {
    q: "In a transactional system, what does the 'A' in ACID stand for?",
    o: ["Atomicity", "Availability", "Aggregation", "Authentication"],
    a: [0],
    e: "ACID stands for Atomicity, Consistency, Isolation and Durability. Atomicity means a transaction is treated as a single unit: either all of its changes are applied or none are. Availability is a different property often discussed in distributed systems (for example, in the CAP theorem)."
  },
  {
    q: "A bank transfer debits one account and credits another. If the system fails after the debit, the debit must be rolled back. Which ACID property guarantees this?",
    o: ["Atomicity", "Consistency", "Isolation", "Durability"],
    a: [0],
    e: "Atomicity ensures that all operations in a transaction succeed or fail together. A transfer that only completes the debit is never left in place. Durability is about committed changes surviving failures, isolation is about concurrent transactions not interfering, and consistency is about moving the database between valid states."
  },
  {
    q: "Which ACID property ensures that once a transaction has been committed, its changes survive a power failure or system crash?",
    o: ["Durability", "Isolation", "Atomicity", "Consistency"],
    a: [0],
    e: "Durability guarantees that committed changes are permanently recorded, typically by writing them to a transaction log on persistent storage before the commit is acknowledged."
  },
  {
    q: "Two users update the same inventory record at the same time. Which ACID property prevents one transaction from seeing the other's uncommitted changes?",
    o: ["Isolation", "Durability", "Atomicity", "Consistency"],
    a: [0],
    e: "Isolation ensures concurrent transactions do not interfere with each other. Each behaves as though it were running alone, so intermediate, uncommitted states are not visible to other transactions."
  },
  {
    q: "Which ACID property ensures that a transaction can only bring the database from one valid state to another, respecting all defined rules and constraints?",
    o: ["Consistency", "Isolation", "Durability", "Atomicity"],
    a: [0],
    e: "Consistency means a transaction must leave data in a valid state that satisfies all rules (constraints, cascades, triggers). For example, a transfer must not create or destroy money: the total across accounts stays the same."
  },
  {
    q: "What is normalization in a relational database?",
    o: ["Organising data into separate related tables to reduce duplication and improve data integrity", "Combining all data into a single wide table so reports can be produced without any joins", "Converting tables into a compressed columnar file format for faster analytical scans", "Encrypting data so only authorised users can read it"],
    a: [0],
    e: "Normalization splits data into multiple related tables, each describing one entity, linked by keys. This removes duplicated values, so an update happens in one place, and reduces anomalies. Analytical models often deliberately denormalize to make queries simpler and faster."
  },
  {
    q: "Which statement describes a primary key?",
    o: ["A column or set of columns that uniquely identifies each row in a table", "A column that references the primary key of a row in another related table", "An index that stores the table's data in a compressed columnar format", "A password required to read a table"],
    a: [0],
    e: "A primary key uniquely identifies each row and cannot contain duplicate or NULL values. A column that references another table's primary key is a foreign key."
  },
  {
    q: "In an Orders table, the CustomerID column references the CustomerID column in the Customers table. What is Orders.CustomerID?",
    o: ["A foreign key", "A primary key", "A clustered index", "A composite key"],
    a: [0],
    e: "A foreign key is a column whose values must match a primary key (or unique key) in another table. It enforces referential integrity: you cannot create an order for a customer who does not exist."
  },
  {
    q: "Which SQL statement category is used to create, modify and delete database objects such as tables and views?",
    o: ["Data Definition Language (DDL)", "Data Manipulation Language (DML)", "Data Control Language (DCL)", "Transaction Control Language (TCL)"],
    a: [0],
    e: "DDL statements (CREATE, ALTER, DROP, RENAME) define the structure of the database. DML (SELECT, INSERT, UPDATE, DELETE) works with the data inside those structures, and DCL (GRANT, REVOKE, DENY) manages permissions."
  },
  {
    q: "Which two statements are Data Manipulation Language (DML) statements? (Choose two.)",
    o: ["INSERT", "UPDATE", "CREATE", "GRANT", "DROP"],
    a: [0, 1],
    e: "DML statements work with data: SELECT, INSERT, UPDATE and DELETE (and MERGE). CREATE is a DDL statement that defines objects, and GRANT is a DCL statement that manages permissions. DROP is also DDL, because it removes an object rather than working with rows."
  },
  {
    q: "You need to give a user permission to read data from a table. Which type of SQL statement should you use?",
    o: ["DCL", "DDL", "DML", "TCL"],
    a: [0],
    e: "Data Control Language (DCL) statements GRANT, DENY and REVOKE control permissions on database objects. For example: `GRANT SELECT ON Sales.Orders TO analyst;`"
  },
  {
    q: "Which SQL statement removes a table and all of its data from a database?",
    o: ["DROP TABLE", "DELETE FROM", "TRUNCATE TABLE", "ALTER TABLE"],
    a: [0],
    e: "DROP TABLE is a DDL statement that removes the table definition along with its data. DELETE removes rows but keeps the table, TRUNCATE quickly removes all rows but keeps the table, and ALTER changes a table's structure."
  },
  {
    q: "What does the following statement do?\n`SELECT Name, Price FROM Products WHERE Price > 100 ORDER BY Price DESC;`",
    o: ["Returns the name and price of products costing more than 100, most expensive first", "Deletes the products that cost more than 100 and returns the remaining rows", "Returns all columns for products costing exactly 100, sorted by name", "Updates the price of every product to 100 and returns the changed rows"],
    a: [0],
    e: "SELECT chooses the columns, FROM chooses the table, WHERE filters rows (Price > 100), and ORDER BY ... DESC sorts from highest to lowest. It is a read-only query and changes no data."
  },
  {
    q: "Which SQL clause is used to combine rows from two tables based on a related column?",
    o: ["JOIN", "GROUP BY", "UNION", "HAVING"],
    a: [0],
    e: "JOIN combines columns from two or more tables using a related column, such as `Orders.CustomerID = Customers.CustomerID`. UNION stacks rows from queries with the same columns, GROUP BY aggregates rows, and HAVING filters aggregated groups."
  },
  {
    q: "What is a view in a relational database?",
    o: ["A virtual table based on the result set of a SELECT query", "A physical copy of a table that is stored separately on disk", "A stored set of permissions", "A backup of a database"],
    a: [0],
    e: "A view is a saved query that you can select from as if it were a table. It stores no data itself (unless it is an indexed/materialized view). Views are used to simplify complex joins and to restrict which columns or rows users can see."
  },
  {
    q: "What is a stored procedure?",
    o: ["A named set of SQL statements saved in the database that can be run with parameters", "A system table that stores documentation for each procedure in the database", "An index type that speeds up joins between tables by pre-sorting matching key columns", "A backup schedule for a database"],
    a: [0],
    e: "A stored procedure encapsulates SQL logic in the database. It can accept parameters, perform inserts, updates and other operations, and be reused by applications. This centralises business logic and can improve security and performance."
  },
  {
    q: "What is the main purpose of an index on a table?",
    o: ["To help queries find rows faster, similar to an index at the back of a book", "To enforce that values in a column are unique across every row in the table", "To encrypt sensitive columns", "To store a copy of the table in another region"],
    a: [0],
    e: "An index is a structure that lets the database locate rows matching a search condition without scanning the whole table. Indexes speed up reads but add overhead to inserts, updates and deletes, because the index must also be maintained."
  },
  {
    q: "Which is a drawback of adding many indexes to a table?",
    o: ["Inserts, updates and deletes become slower because each index must be maintained", "SELECT queries always become slower because more data must be read", "The table can no longer have a primary key or any foreign key constraints", "The table must be moved into a data lake to store the extra index files"],
    a: [0],
    e: "Every index must be updated when data changes, so too many indexes slow down write operations and consume storage. The trade-off is faster reads for the queries the indexes support."
  },
  {
    q: "Which job role is primarily responsible for designing and implementing pipelines that ingest, clean and transform data from multiple sources?",
    o: ["Data engineer", "Database administrator", "Data analyst", "Business user"],
    a: [0],
    e: "Data engineers build and maintain data integration pipelines and data stores (for example using Azure Data Factory, Synapse pipelines or Fabric Data Factory). Database administrators manage database availability, security and performance, and data analysts explore and visualise data to produce insights."
  },
  {
    q: "Which job role is responsible for database backups, restores, security, user permissions and availability?",
    o: ["Database administrator", "Data engineer", "Data analyst", "Data scientist"],
    a: [0],
    e: "The database administrator (DBA) manages operational aspects of databases: installation, upgrades, backup and recovery, high availability, security and access control, and performance monitoring."
  },
  {
    q: "Which job role builds reports and dashboards to help the business understand its data, typically using tools such as Power BI?",
    o: ["Data analyst", "Database administrator", "Data engineer", "Network administrator"],
    a: [0],
    e: "Data analysts explore and analyse data, build data models and create visualisations and reports that turn data into business insight. Power BI is the main Microsoft tool for this role."
  },
  {
    q: "A data engineer most commonly uses which of the following tools?",
    o: ["Azure Data Factory and Azure Synapse Analytics pipelines", "Power BI Desktop report themes and custom visual formatting", "Microsoft Entra ID user provisioning and group membership rules", "Microsoft Excel conditional formatting"],
    a: [0],
    e: "Data engineers work with data integration and processing services such as Azure Data Factory, Synapse Analytics, Microsoft Fabric and Azure Databricks. Report design is mostly a data analyst task, and identity provisioning is an administrator task."
  },
  {
    q: "Which type of analytics answers the question 'What happened?' using historical data?",
    o: ["Descriptive analytics", "Diagnostic analytics", "Predictive analytics", "Prescriptive analytics"],
    a: [0],
    e: "Descriptive analytics summarises historical data to describe what happened, for example monthly sales reports or KPIs on a dashboard. Diagnostic analytics asks why, predictive asks what will happen, and prescriptive asks what should we do."
  },
  {
    q: "Which type of analytics answers the question 'Why did it happen?'",
    o: ["Diagnostic analytics", "Descriptive analytics", "Predictive analytics", "Cognitive analytics"],
    a: [0],
    e: "Diagnostic analytics investigates the causes behind past results, using techniques such as drill-down, data discovery and correlation. For example, finding that a sales drop was driven by one region."
  },
  {
    q: "A retailer uses historical data and machine learning to forecast next month's demand for each product. Which type of analytics is this?",
    o: ["Predictive analytics", "Descriptive analytics", "Diagnostic analytics", "Prescriptive analytics"],
    a: [0],
    e: "Predictive analytics uses historical data, statistical models and machine learning to forecast what is likely to happen in the future."
  },
  {
    q: "A system recommends the optimal discount to apply to each product to maximise profit. Which type of analytics is this?",
    o: ["Prescriptive analytics", "Predictive analytics", "Descriptive analytics", "Diagnostic analytics"],
    a: [0],
    e: "Prescriptive analytics goes beyond predicting outcomes to recommend actions that achieve a goal, such as the best price, route or stock level."
  },
  {
    q: "Which type of analytics draws inferences from existing data and patterns, for example using AI to interpret text or images?",
    o: ["Cognitive analytics", "Descriptive analytics", "Diagnostic analytics", "Batch analytics"],
    a: [0],
    e: "Cognitive analytics applies AI techniques (natural language processing, computer vision, knowledge models) to draw conclusions in a way that resembles human reasoning, often from unstructured data."
  },
  {
    q: "What is batch processing?",
    o: ["Collecting data over a period and processing it together as a group", "Processing each data record individually as soon as it arrives", "Storing data in a key-value database", "Encrypting data before storing it"],
    a: [0],
    e: "Batch processing collects data and processes it in groups at scheduled intervals or when a threshold is reached, for example a nightly job that loads the day's sales into a warehouse. Processing each record as it arrives is stream processing."
  },
  {
    q: "What is stream processing?",
    o: ["Processing data continuously, in real time or near real time, as each new record arrives", "Processing large groups of collected data together on a fixed schedule", "Copying files between storage accounts as soon as each file is complete", "Running the same query against many databases at the same time to compare results"],
    a: [0],
    e: "Stream processing handles data as an unbounded, continuous flow and produces results within seconds or milliseconds. Typical uses are IoT telemetry monitoring, fraud detection and live dashboards."
  },
  {
    q: "Which two statements describe batch processing compared with stream processing? (Choose two.)",
    o: ["It can process large volumes of data efficiently at a scheduled time", "There is a delay (latency) between when data is generated and when results are available", "It produces results within milliseconds of each event occurring at the source", "It always processes one record at a time as soon as that record arrives", "It requires the data to be stored in a graph database before it is processed"],
    a: [0, 1],
    e: "Batch processing is efficient for large volumes and complex transformations, but results are only available after the batch runs, so latency is higher (minutes to hours). Millisecond results and per-record processing are characteristics of streaming. Batch processing does not depend on any particular database type."
  },
  {
    q: "Which scenario is BEST suited to stream processing?",
    o: ["Detecting fraudulent credit card transactions as they happen", "Generating a monthly payroll report", "Loading last year's sales history into a data warehouse", "Archiving log files to cold storage every weekend"],
    a: [0],
    e: "Fraud detection needs to act on each transaction within moments, which requires real-time stream processing. The other scenarios tolerate delay and are typical batch workloads."
  },
  {
    q: "Which statement about stream processing is correct?",
    o: ["It typically works on a rolling time window or individual events and requires low latency", "It requires all data for the period to be available before processing can start", "It is mainly used for complex analysis of many years of historical data at once", "It cannot be used with IoT devices"],
    a: [0],
    e: "Streaming analyses data within small time windows (for example, the last 30 seconds) or event by event, with latency of seconds or less. Batch processing works on complete, bounded datasets and suits complex historical analysis."
  },
  {
    q: "What is a data warehouse?",
    o: ["A relational store optimised for analytical queries over integrated historical data", "A store that keeps raw files of any type in their native format for later use", "A transactional database that records day-to-day operations for one application", "A messaging service that buffers event data between producers and consumers"],
    a: [0],
    e: "A data warehouse integrates data from multiple sources into a schema (usually star or snowflake) designed for analytical queries and reporting. A data lake, by contrast, stores raw files of any format in their native form."
  },
  {
    q: "What is a data lake?",
    o: ["A repository that stores large volumes of raw data as files in their native format", "A relational database optimised for many small concurrent OLTP transactions", "A dashboard that combines pinned visuals from many different reports", "A table that stores only pre-aggregated summary data for reporting"],
    a: [0],
    e: "A data lake holds structured, semi-structured and unstructured data as files, often applying a schema only when the data is read (schema-on-read). In Azure, data lakes are typically built on Azure Data Lake Storage Gen2 or OneLake in Microsoft Fabric."
  },
  {
    q: "What does 'schema-on-read' mean?",
    o: ["Data is stored raw and a structure is applied when the data is queried", "A schema must be defined and enforced before any data can be written", "The schema is stored inside each row of a table", "Only users with read permissions can see the schema"],
    a: [0],
    e: "With schema-on-read, data is stored in its original form (common in data lakes) and the schema is projected onto it at query time. Relational databases and warehouses use schema-on-write, where data must match the table schema when it is inserted."
  },
  {
    q: "What is a data lakehouse?",
    o: ["An architecture that combines data lake storage with warehouse-style SQL querying and ACID tables", "A relational database that is hosted on-premises and replicated to a data lake each night", "A Power BI workspace that holds only dashboards built on top of a data lake", "A key-value store optimised for low-latency lookups of files stored in a data lake"],
    a: [0],
    e: "A lakehouse stores data as files in a data lake but adds a table layer (for example Delta Lake) that supports schemas, ACID transactions and SQL querying. Microsoft Fabric lakehouses and Azure Databricks use this approach."
  },
  {
    q: "What does ETL stand for?",
    o: ["Extract, Transform, Load", "Encrypt, Transfer, Log", "Evaluate, Test, Launch", "Export, Translate, Link"],
    a: [0],
    e: "ETL means data is extracted from sources, transformed (cleaned, combined, reshaped) in a processing engine, and then loaded into the target store."
  },
  {
    q: "How does ELT differ from ETL?",
    o: ["In ELT, data is loaded into the target store first and then transformed there", "In ELT, data is never transformed and is always reported exactly as extracted", "ELT can only be used for streaming data, while ETL is only for batch data", "ELT encrypts data before loading it, while ETL loads data unencrypted"],
    a: [0],
    e: "In ELT (Extract, Load, Transform) raw data is loaded into a scalable target, such as a data lake or cloud data warehouse, and transformed using that platform's compute. This uses the power of modern analytical engines and keeps the raw data available."
  },
  {
    q: "In a star schema, which table contains numeric measurements of business events such as sales amount and quantity?",
    o: ["Fact table", "Dimension table", "Lookup table", "Staging table"],
    a: [0],
    e: "Fact tables record business events and their numeric measures (quantity, amount, cost), plus foreign keys to dimensions. Dimension tables describe the context of those events, such as product, customer, store and date."
  },
  {
    q: "In a star schema, a table holding attributes about products, such as name, category and colour, is called a:",
    o: ["Dimension table", "Fact table", "Bridge table", "Temporal table"],
    a: [0],
    e: "Dimension tables hold descriptive attributes used to filter, group and label facts. A Product dimension lets you slice sales by category or colour."
  },
  {
    q: "What distinguishes a snowflake schema from a star schema?",
    o: ["Dimension tables are normalized into additional related tables", "There are multiple fact tables and no dimension tables at all", "All data is stored in a single table", "It can only be used in non-relational databases"],
    a: [0],
    e: "In a snowflake schema, dimensions are normalized. For example, Product links to a separate Category table, which links to a Department table. In a star schema each dimension is a single denormalized table directly connected to the fact table."
  },
  {
    q: "Why are analytical data models often denormalized?",
    o: ["To reduce the number of joins needed and make read queries faster and simpler", "To reduce the total amount of storage used by removing duplicated values", "To make inserts and updates faster by writing each value in only one place", "To enforce stricter data integrity with more foreign key constraints"],
    a: [0],
    e: "Analytical workloads are read-heavy. Denormalized structures like star schemas reduce joins, which speeds up aggregation and makes models easier for analysts to understand. The cost is some redundancy, which matters less because data is loaded in controlled batches."
  },
  {
    q: "Which is a typical characteristic of data in a transactional system compared to an analytical system?",
    o: ["It is highly normalized and optimised for writes", "It is denormalized into star schemas", "It is mostly read in large aggregated queries", "It is updated once per day in bulk loads"],
    a: [0],
    e: "Transactional (OLTP) databases are normalized to avoid duplicate data and make frequent small writes efficient and consistent. Star schemas, large aggregate reads and bulk loads are characteristics of analytical systems."
  },
  {
    q: "What is a 'dimension' of time in a data warehouse typically used for?",
    o: ["Grouping and filtering facts by date attributes such as year, quarter, month and weekday", "Storing the exact date and time each user signed in to the reporting system and app", "Encrypting timestamp columns so that dates cannot be read by analysts", "Scheduling the times at which data pipelines run each day or week"],
    a: [0],
    e: "A date (time) dimension contains one row per date with attributes such as year, quarter, month name and day of week. It lets analysts aggregate facts over time periods consistently."
  },
  {
    q: "Which term describes data about data, such as a table's column names, data types and owner?",
    o: ["Metadata", "Telemetry", "Master data", "Transactional data"],
    a: [0],
    e: "Metadata describes other data: its structure, meaning, origin and ownership. Data catalogs such as Microsoft Purview collect metadata so users can discover and understand data assets."
  },
  {
    q: "Which Azure service provides data governance, including a data catalog, data classification and lineage across on-premises, multicloud and SaaS sources?",
    o: ["Microsoft Purview", "Azure Monitor", "Azure Data Factory", "Azure Key Vault"],
    a: [0],
    e: "Microsoft Purview is the unified data governance service. It scans sources to build a data map, classifies sensitive data, shows lineage and lets users discover data through a catalog. Data Factory moves data, and Key Vault stores secrets and keys."
  },
  {
    q: "What does data lineage show?",
    o: ["Where data came from and how it was moved and transformed to reach its current location", "The number of users who queried a table and how often they ran each query", "The physical disks, servers and datacenters where each copy of the data is currently stored", "The order in which rows were inserted into each table over time"],
    a: [0],
    e: "Lineage traces data from source through transformations to its destination (for example, from a SQL table through a pipeline to a Power BI report). It helps with impact analysis, troubleshooting and compliance."
  },
  {
    q: "Which category of data includes information captured as a by-product of devices, such as sensor readings sent every few seconds?",
    o: ["Telemetry / streaming data", "Master / customer data", "Reference / lookup data", "Archived / historical data"],
    a: [0],
    e: "IoT devices emit telemetry continuously, producing a stream of time-stamped events. Such data is usually ingested via services such as Azure IoT Hub or Event Hubs and processed with stream analytics."
  },
  {
    q: "Which statement about relational databases is true?",
    o: ["Data is stored in tables of rows and columns, and every row in a table has the same columns", "Each record can have a completely different set of fields, stored as a JSON document", "Relationships are stored as edges between nodes, and entities are stored as vertices", "Data is stored as files in their native format and a schema is applied when read"],
    a: [0],
    e: "Relational databases model data as tables with a fixed schema. Varying fields per record describes document stores, edges between nodes describes graph databases, and native-format files describes data lakes."
  },
  {
    q: "Which two benefits are provided by using a relational database for an order processing system? (Choose two.)",
    o: ["Support for ACID transactions", "Enforcement of relationships with foreign keys", "Flexible schemas so each order can store a different set of fields", "Schema-on-read queries over raw order files kept in a data lake", "Automatic horizontal scale-out of writes across many partitions"],
    a: [0, 1],
    e: "Relational databases provide ACID transactions and enforce referential integrity with primary and foreign keys, both valuable for orders, customers and payments. Flexible per-record schemas and effortless scale-out across partitions are typical strengths of NoSQL stores, and schema-on-read over raw files describes a data lake."
  },
  {
    q: "You need to store large amounts of JSON telemetry from millions of devices with very low-latency writes, and the schema will change frequently. Which type of data store is MOST appropriate?",
    o: ["A non-relational (NoSQL) database such as Azure Cosmos DB", "A highly normalized relational database with a fixed schema", "A star schema in a dedicated data warehouse", "An Excel workbook stored in a SharePoint document library"],
    a: [0],
    e: "NoSQL databases like Cosmos DB scale horizontally, accept flexible schemas and deliver low-latency writes globally, which suits high-volume telemetry with evolving structure. A normalized relational database requires a fixed schema and is harder to scale out for this pattern."
  },
  {
    q: "What does it mean for a database to 'scale out' (horizontal scaling)?",
    o: ["Adding more servers or partitions to share the workload", "Adding more CPU and memory to a single server", "Moving the database to a larger disk", "Reducing the number of indexes"],
    a: [0],
    e: "Scaling out adds more nodes and distributes data (partitioning or sharding) across them. Scaling up (vertical scaling) increases resources on a single server. Many NoSQL services, including Cosmos DB, are built to scale out."
  },
  {
    q: "Which describes 'eventual consistency' in a distributed database?",
    o: ["Replicas may briefly return older data, but all copies converge to the same value over time", "All reads always return the most recent committed write, no matter which replica serves them", "Data is never replicated, so there is only ever one copy of each item", "Transactions are rolled back automatically if any two replicas disagree"],
    a: [0],
    e: "Eventual consistency trades immediate consistency for higher availability and lower latency. Replicas update asynchronously, so a read might see stale data for a short time, but without new writes all replicas eventually agree. Strong consistency guarantees reads always see the latest write."
  },
  {
    q: "A file contains the following:\n`{\"id\": 1, \"name\": \"Ben\", \"tags\": [\"vip\", \"retail\"]}`\nWhich format is this?",
    o: ["JSON", "XML", "CSV", "YAML"],
    a: [0],
    e: "JSON (JavaScript Object Notation) uses curly braces for objects, square brackets for arrays and double-quoted keys with values. It is the most common semi-structured format and is the native document format of Azure Cosmos DB for NoSQL."
  },
  {
    q: "Which statement describes the difference between a data analyst and a data engineer?",
    o: ["Engineers build pipelines and data stores; analysts explore the data and create reports", "Analysts manage database backups and security; engineers build dashboards and reports", "There is no difference; the two job titles describe exactly the same role", "Engineers only work with unstructured data; analysts only work with structured data"],
    a: [0],
    e: "Data engineers prepare data: ingestion, transformation, storage and pipeline operations. Data analysts consume that prepared data to build models, visualisations and reports. Backups are a database administrator responsibility."
  },
  {
    q: "Which type of data store is best for storing large binary files such as images, videos and backups at low cost?",
    o: ["Object storage such as Azure Blob Storage", "A relational table with a VARCHAR column", "A graph database", "A column-family database"],
    a: [0],
    e: "Object (blob) storage is designed for large amounts of unstructured binary data, with tiered pricing for hot, cool, cold and archive access. Relational and NoSQL databases are not cost-effective for storing large media files directly."
  },
  {
    q: "What is a composite key?",
    o: ["A primary key made up of two or more columns", "A key used to encrypt every column in a database", "A foreign key that references itself", "A key stored in Azure Key Vault"],
    a: [0],
    e: "A composite key uses a combination of columns to uniquely identify a row, for example OrderID plus LineNumber in an OrderLines table, where neither column alone is unique."
  },
  {
    q: "Which statement correctly compares OLTP and OLAP?",
    o: ["OLTP records current business transactions; OLAP analyses aggregated historical data", "OLTP is used only for unstructured data; OLAP only for structured data", "OLAP systems are optimised for many small concurrent writes", "OLTP systems store data primarily in Parquet files"],
    a: [0],
    e: "OLTP (online transaction processing) handles live, granular transactions with fast writes. OLAP (online analytical processing) supports multidimensional analysis of large volumes of aggregated historical data."
  },
  {
    q: "What is an OLAP model (cube) used for?",
    o: ["Pre-aggregating data across dimensions so queries like 'sales by region by quarter' are fast", "Capturing individual web orders in real time and committing each one as a single transaction", "Storing binary images and documents alongside the related relational rows", "Managing which users have permission to read each table and column"],
    a: [0],
    e: "An OLAP model stores data aggregated across hierarchies of dimensions (for example, Year > Quarter > Month), so business users can slice, dice and drill down quickly without scanning detailed transactional data."
  },
  {
    q: "Which two are examples of data that would typically be processed by an analytical workload rather than a transactional one? (Choose two.)",
    o: ["Five years of sales history used to identify seasonal trends", "A daily aggregate of website visits used in a management dashboard", "A customer placing an order on an e-commerce site during a sale", "An ATM withdrawal debiting a customer's current account balance", "Updating a customer's delivery address in the order system"],
    a: [0, 1],
    e: "Trend analysis over historical data and aggregated dashboard metrics are analytical. Placing an order and withdrawing cash are individual business transactions handled by OLTP systems. Updating an address is also a single transaction handled by an OLTP system."
  },
  {
    q: "Which language is used to query and manipulate data in relational databases?",
    o: ["SQL (Structured Query Language)", "DAX", "KQL (Kusto Query Language)", "HTML"],
    a: [0],
    e: "SQL is the standard language for relational databases. DAX is a formula language for Power BI and Analysis Services models, and KQL is used by Azure Data Explorer and Real-Time Intelligence in Fabric. HTML is for web pages."
  },
  {
    q: "Transact-SQL (T-SQL) is the dialect of SQL used by which database engine?",
    o: ["Microsoft SQL Server and Azure SQL", "PostgreSQL and Azure Database for PostgreSQL", "MySQL and Azure Database for MySQL", "Oracle Database and Oracle Autonomous Database"],
    a: [0],
    e: "T-SQL is Microsoft's SQL dialect, used by SQL Server, Azure SQL Database, Azure SQL Managed Instance, and the SQL engines in Azure Synapse and Microsoft Fabric. PostgreSQL uses PL/pgSQL for procedural code, and Oracle uses PL/SQL."
  },
  {
    q: "Which SQL keyword is used with aggregate functions such as SUM and COUNT to produce one result row per category?",
    o: ["GROUP BY", "ORDER BY", "WHERE", "DISTINCT"],
    a: [0],
    e: "GROUP BY groups rows that share values in specified columns so that aggregate functions are calculated per group, for example `SELECT Category, SUM(Amount) FROM Sales GROUP BY Category;`"
  },
  {
    q: "Which SQL statement changes existing data in a table?",
    o: ["UPDATE", "ALTER", "INSERT", "MODIFY"],
    a: [0],
    e: "UPDATE changes values in existing rows, usually with a WHERE clause to target specific rows. ALTER is DDL and changes a table's structure, INSERT adds new rows, and MODIFY is not a standard SQL statement for changing data."
  },
  {
    q: "What happens if you run `DELETE FROM Customers;` without a WHERE clause?",
    o: ["All rows in the Customers table are deleted, but the table remains", "The Customers table is dropped from the database along with its data", "Nothing happens because a WHERE clause is required", "Only the first row is deleted"],
    a: [0],
    e: "DELETE without WHERE removes every row while keeping the table definition. To remove the table itself you would use DROP TABLE. Always double-check DELETE and UPDATE statements for a WHERE clause."
  },
  {
    q: "Which of the following is an example of a transactional workload?",
    o: ["Recording a hotel reservation", "Calculating average revenue per room over the past five years", "Training a machine learning model on historical bookings", "Building a quarterly occupancy dashboard"],
    a: [0],
    e: "Recording a reservation is an individual business transaction that must be captured accurately and immediately. The other options analyse historical data and are analytical workloads."
  },
  {
    q: "Which TWO of the following are characteristics of semi-structured data? (Choose two.)",
    o: ["It can contain nested and repeating elements", "Each entity is self-describing, with field names stored alongside values", "It must conform to a fixed schema that is defined before data is written", "It has no field names or tags at all, like an image or audio file", "It can only be stored in relational tables with typed columns"],
    a: [0, 1],
    e: "Semi-structured formats like JSON and XML include field names with values (self-describing) and support nesting and arrays. A fixed predefined schema describes structured data, and no organisation at all describes unstructured data. Semi-structured data is usually kept in files or document databases; it is not limited to relational tables."
  },
  {
    q: "What is the purpose of the data visualisation stage in an analytics process?",
    o: ["To present data in charts and reports so people can spot trends and make decisions", "To compress data so that it takes less space in long-term storage", "To copy data between Azure regions for disaster recovery purposes", "To define primary keys, foreign keys and relationships between all the tables in a database"],
    a: [0],
    e: "Visualisation turns processed data into charts, maps and dashboards that make patterns and outliers easy to see. In Azure, Power BI is the primary visualisation tool."
  },
  {
    q: "Which describes 'data ingestion'?",
    o: ["Capturing raw data from sources and bringing it into a data store or processing system", "Deleting old data that is no longer needed once its retention period has passed", "Displaying processed data in interactive dashboards and reports for business users to explore", "Granting users and applications permission to access a database"],
    a: [0],
    e: "Ingestion is the first step of a data pipeline: collecting data from operational systems, files, devices or APIs and landing it in a store such as a data lake, using batch or streaming methods."
  },
  {
    q: "Your organisation needs to make sure that personally identifiable information (PII) in its data estate is discovered and labelled. Which capability addresses this?",
    o: ["Data classification in Microsoft Purview", "Autoscale in Azure Cosmos DB", "Partitioning in Azure Data Lake Storage", "Incremental refresh in Power BI"],
    a: [0],
    e: "Microsoft Purview scans data sources and applies built-in or custom classifications (for example credit card numbers or national IDs), so sensitive data can be found, labelled and governed."
  },
  {
    q: "Which describes the term 'big data'?",
    o: ["Data with very high volume, velocity or variety that traditional tools struggle to handle", "Any table that contains more than a million rows, regardless of how the data is used or stored", "Data that is stored only in very large Excel workbooks on a file share", "Data that is always structured and stored in a single relational database"],
    a: [0],
    e: "Big data is commonly described by the 'three Vs': volume (very large amounts), velocity (high speed of arrival) and variety (many formats). Distributed processing platforms such as Spark were developed to handle it."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nA relational database can enforce that every order references an existing customer.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Foreign key constraints enforce referential integrity, so an order cannot reference a CustomerID that does not exist in the Customers table."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nJSON documents in the same collection must all contain exactly the same fields.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. JSON is semi-structured, so documents in the same collection can contain different fields, nested objects and arrays. A fixed set of columns is a feature of structured, relational data."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nStream processing typically has lower latency than batch processing.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Stream processing handles each event or small time window as data arrives, giving results in seconds or less. Batch processing waits for a batch to be collected, so results arrive minutes or hours later."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nA data analyst is primarily responsible for configuring database backups and high availability.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. Backups, restores and high availability are database administrator responsibilities. Data analysts explore data and build models, reports and visualisations."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nParquet is a row-oriented text file format.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. Parquet is a binary, column-oriented format. Storing each column's values together gives strong compression and lets queries read only the columns they need. CSV is an example of a row-oriented text format."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nThe DELETE statement is part of Data Manipulation Language (DML).",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. DML statements work with data inside tables: SELECT, INSERT, UPDATE and DELETE. DDL statements such as CREATE, ALTER and DROP define objects."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nNormalization in a transactional database reduces data duplication.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Normalization splits data into related tables so each fact is stored once. This reduces duplication and prevents update anomalies."
  },
  {
    q: "An application log file contains free-form text messages written by developers. Which type of data is this?",
    o: ["Structured", "Semi-structured", "Unstructured"],
    a: [2],
    k: 1,
    e: "Free-form text with no consistent fields is unstructured. If the logs were written as JSON with named fields, they would be semi-structured, and a table of log rows would be structured."
  },
  {
    q: "A product catalog is stored as XML, where each product can have a different set of elements. Which type of data is this?",
    o: ["Structured", "Semi-structured", "Unstructured"],
    a: [1],
    k: 1,
    e: "XML is semi-structured: it is self-describing through tags and can vary from record to record, but it does not follow a fixed relational schema."
  },
  {
    q: "A spreadsheet export where every row has the columns Date, Store and Revenue is which type of data?",
    o: ["Structured", "Semi-structured", "Unstructured"],
    a: [0],
    k: 1,
    e: "Data with a fixed set of columns shared by every row is structured, and fits directly into a relational table."
  },
  {
    q: "Which statement category does `GRANT SELECT ON Sales TO Analysts;` belong to?",
    o: ["Data Control Language (DCL)", "Data Definition Language (DDL)", "Data Manipulation Language (DML)"],
    a: [0],
    e: "GRANT, REVOKE and DENY are DCL statements that manage permissions. DDL defines objects (CREATE, ALTER, DROP), and DML works with the data (SELECT, INSERT, UPDATE, DELETE)."
  },
  {
    q: "A nightly job loads the previous day's orders into a reporting database. Which processing approach is this?",
    o: ["Batch processing", "Stream processing", "Transaction processing"],
    a: [0],
    e: "Collecting a day's data and processing it together on a schedule is batch processing. Stream processing handles each event as it arrives, and transaction processing records the individual orders in the operational system."
  },
  {
    q: "What is a data mart?",
    o: ["A subset of a data warehouse focused on a single business area, such as sales or finance", "A marketplace where organisations buy and sell third-party datasets for analytics", "A transactional database that records the day-to-day operations of a single business application", "A backup copy of a data lake that is kept in another Azure region"],
    a: [0],
    e: "A data mart is a smaller, subject-focused analytical store, often built from the enterprise data warehouse, that serves one department or business function. It is not a marketplace, an OLTP database or a backup."
  },
  {
    q: "Which job role typically uses statistics and machine learning to build predictive models from data?",
    o: ["Data scientist", "Database administrator", "Data analyst", "Network engineer"],
    a: [0],
    e: "Data scientists apply statistical techniques and machine learning to build predictive and prescriptive models. Data analysts focus on describing and visualising data, and database administrators manage database operations."
  },
  {
    q: "In database terms, what is a transaction?",
    o: ["A group of operations treated as one unit of work that either fully succeeds or fully fails", "Any SELECT query that reads rows from several tables at once and returns them in one result set", "A file copied between two storage accounts using a single AzCopy command", "A scheduled report that is generated and sent by email at the same time every day"],
    a: [0],
    e: "A transaction groups one or more operations so they are applied together or not at all, which is the basis of the ACID guarantees. Queries, file transfers and reports are not transactions in this sense."
  },
  {
    q: "What does denormalization mean?",
    o: ["Combining data into fewer tables, accepting some duplication, to make reads simpler and faster", "Splitting wide tables into smaller related tables linked by keys to eliminate duplicated data values", "Encrypting data at rest so that it cannot be read without the correct key", "Removing all indexes from a database so that bulk inserts and updates run faster"],
    a: [0],
    e: "Denormalization reverses some normalization, for example by copying category names into a product dimension, so analytical queries need fewer joins. Splitting tables to remove duplication is normalization."
  },
  {
    q: "Temperature readings recorded with a timestamp every minute from a sensor are an example of which kind of data?",
    o: ["Time-series data", "Master data", "Graph data", "Reference data"],
    a: [0],
    e: "Time-series data is a sequence of values indexed by time, such as telemetry, stock prices or metrics. It is common in IoT and is often analysed with tools such as Azure Data Explorer or Fabric Real-Time Intelligence."
  },
  {
    q: "Which kind of data store organises files in folders and subfolders, like the file system on a computer?",
    o: ["A hierarchical file store, such as a data lake with a hierarchical namespace", "A key-value store, such as Azure Table storage", "A graph database, such as Cosmos DB for Apache Gremlin", "A column-family database that groups related columns into families, such as Apache Cassandra"],
    a: [0],
    e: "File stores arrange files in a hierarchy of directories. Azure Data Lake Storage Gen2 adds a true hierarchical namespace on top of Blob Storage. Key-value, graph and column-family stores organise data in other ways."
  },
  {
    q: "Which type of data store is best for keeping raw data of all types, including images, logs and CSV files, at low cost for later analysis?",
    o: ["Data lake", "Data mart", "OLTP relational database", "Power BI semantic model"],
    a: [0],
    e: "A data lake holds raw structured, semi-structured and unstructured files cheaply until they are needed. Data marts and semantic models hold curated data, and an OLTP database is designed for transactions."
  },
  {
    q: "How does near real-time processing differ from real-time processing?",
    o: ["Near real-time results arrive within seconds or minutes; real-time results within milliseconds", "Near real-time processing runs once per day, while real-time processing runs once per hour", "Real-time processing always uses scheduled batch jobs, while near real-time uses streams", "There is no difference in latency; the two terms describe exactly the same processing"],
    a: [0],
    e: "Real-time systems respond in milliseconds (for example, fraud blocking), while near real-time systems accept a short delay of seconds or minutes (for example, a dashboard refreshed every minute). Both are forms of stream processing, not daily batches."
  },
  {
    q: "Which two file formats store data in a columnar layout? (Choose two.)",
    o: ["Parquet", "ORC", "Avro", "CSV", "JSON"],
    a: [0, 1],
    e: "Parquet and ORC are columnar formats designed for analytics. Avro is a row-based binary format, and CSV and JSON are row-oriented text formats."
  },
  {
    q: "Which two are characteristics of an OLTP workload? (Choose two.)",
    o: ["Many concurrent, small read and write operations", "Highly normalized tables", "Mostly large aggregate queries over years of history", "Data loaded once per night in bulk", "Star schema with fact and dimension tables"],
    a: [0, 1],
    e: "OLTP systems handle many short transactions on normalized tables. Large aggregate queries, nightly bulk loads and star schemas are characteristics of analytical (OLAP) workloads."
  },
  {
    q: "Which two are examples of structured data? (Choose two.)",
    o: ["An Employees table with EmployeeID, Name and HireDate columns", "A CSV export of invoices with the same columns in every row", "A video recording of a team meeting stored in OneDrive", "A folder of scanned paper receipts saved as JPEG images", "A set of JSON documents in which each one has different fields"],
    a: [0, 1],
    e: "Structured data has a fixed schema of rows and columns, like a relational table or a consistent CSV file. Recordings and scanned images are unstructured, and JSON with varying fields is semi-structured."
  },
  {
    q: "Which two file formats are human-readable text formats? (Choose two.)",
    o: ["CSV", "JSON", "Parquet", "Avro", "ORC"],
    a: [0, 1],
    e: "CSV and JSON (and XML) are plain text that you can open and read in any text editor. Parquet, Avro and ORC are binary formats optimised for storage and processing."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nA primary key column can contain NULL values.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. A primary key must uniquely identify every row, so it cannot contain NULLs or duplicate values."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nData must be transformed into a fixed schema before it can be stored in a data lake.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. A data lake stores data in its raw, native format and applies a schema when the data is read (schema-on-read)."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nA graph database is optimised for queries that traverse relationships between entities.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Graph databases store relationships as edges, so queries such as 'friends of friends' or 'shortest path' are efficient."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nIn ETL, data is transformed before it is loaded into the target data store.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. ETL extracts, then transforms in a processing engine, then loads. In ELT, data is loaded first and transformed inside the target store."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nA data analyst is usually responsible for building interactive reports and dashboards.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Data analysts model and visualise data to answer business questions, typically using Power BI. Pipelines are the data engineer's job, and database operations are the DBA's."
  },
  {
    q: "Which role is MOST likely to create a Power BI semantic model and report for the sales team?",
    o: ["Data analyst", "Database administrator", "Data engineer"],
    a: [0],
    e: "Data analysts build semantic models, measures and reports. Data engineers prepare the data that feeds them, and database administrators keep the databases secure and available."
  },
  {
    q: "A company calculates the total revenue per region for each of the last five years. Which type of workload is this?",
    o: ["Analytical", "Transactional", "Streaming"],
    a: [0],
    e: "Aggregating historical data to find patterns is an analytical workload. Transactional workloads record individual operations, and streaming workloads process events as they arrive."
  },
  {
    q: "Which type of analytics is a dashboard showing last quarter's sales by product?",
    o: ["Descriptive", "Predictive", "Prescriptive"],
    a: [0],
    e: "Showing what has already happened is descriptive analytics. Predictive analytics forecasts future outcomes, and prescriptive analytics recommends actions."
  },
  {
    t: "yesno",
    q: "Consider these statements about data file formats.",
    s: [
      ["Parquet stores data in a columnar format.", true],
      ["Avro is a human-readable text format.", false],
      ["JSON can represent nested objects and arrays.", true]
    ],
    e: "1 Yes: Parquet stores each column's values together, which suits analytical queries. 2 No: Avro is a binary, row-based format; its schema is JSON, but the data is binary. 3 Yes: JSON supports nested objects and arrays, which is why it is semi-structured."
  },
  {
    t: "yesno",
    q: "Consider these statements about transactional and analytical workloads.",
    s: [
      ["Transactional systems are typically optimised for many small, concurrent reads and writes.", true],
      ["Analytical systems usually store highly normalized data to speed up aggregate queries.", false],
      ["Data warehouses are commonly loaded by scheduled batch processes.", true]
    ],
    e: "1 Yes: OLTP systems handle many short transactions. 2 No: analytical systems are usually denormalized (for example, star schemas) to reduce joins; normalization suits transactional systems. 3 Yes: warehouses are typically loaded by batch ETL/ELT jobs, although streaming loads are also possible."
  },
  {
    t: "yesno",
    q: "Consider these statements about data job roles.",
    s: [
      ["Database administrators are responsible for backing up and restoring databases.", true],
      ["Data engineers design and build data ingestion and transformation pipelines.", true],
      ["Data analysts are responsible for patching the operating systems of database servers.", false]
    ],
    e: "1 Yes: backup, recovery, availability and security are core DBA tasks. 2 Yes: data engineers build pipelines and data stores. 3 No: data analysts model and visualise data; server patching is an administrator task (or Microsoft's, for PaaS services)."
  },
  {
    t: "yesno",
    q: "Consider these statements about non-relational databases.",
    s: [
      ["A key-value store retrieves values by key without interpreting the value.", true],
      ["A document database requires every document in a collection to have the same fields.", false],
      ["A graph database stores relationships as edges between nodes.", true]
    ],
    e: "1 Yes: in a key-value store the value is opaque to the database. 2 No: document databases are schema-flexible, so documents can have different fields. 3 Yes: graph databases model entities as nodes and relationships as edges."
  },
  {
    t: "match",
    q: "Match each example to the type of data it represents.",
    c: ["Structured", "Semi-structured", "Unstructured"],
    s: [
      ["A table of employees with the same columns in every row", 0],
      ["A JSON document describing an order and its line items", 1],
      ["A JPEG photo of a paper receipt", 2],
      ["An XML configuration file", 1]
    ],
    e: "A table with fixed columns is structured. JSON and XML carry their own field names or tags and can vary in shape, so they are semi-structured. A photo has no field structure, so it is unstructured."
  },
  {
    t: "match",
    q: "Match each type of non-relational database to its description.",
    c: ["Key-value", "Document", "Column-family", "Graph"],
    s: [
      ["Stores JSON documents that can be queried by their fields", 1],
      ["Stores entities and the relationships between them", 3],
      ["Looks up an opaque value by its unique key", 0],
      ["Groups related columns, and each row can have different columns", 2]
    ],
    e: "Document databases (such as Cosmos DB for NoSQL or MongoDB) store queryable JSON. Graph databases (Cosmos DB for Apache Gremlin) store nodes and edges. Key-value stores (Table storage) look up values by key. Column-family databases (Cosmos DB for Apache Cassandra) group columns into families with sparse rows."
  },
  {
    t: "match",
    q: "Match each task to the job role that is primarily responsible for it.",
    c: ["Database administrator", "Data engineer", "Data analyst"],
    s: [
      ["Restoring a database after a failure", 0],
      ["Building a pipeline that loads sales data into a lakehouse", 1],
      ["Creating a Power BI report for the sales team", 2],
      ["Managing user permissions on a SQL database", 0]
    ],
    e: "Database administrators handle recovery, security and permissions. Data engineers build pipelines and data stores. Data analysts build reports and models. Each role can be used more than once."
  },
  {
    t: "match",
    q: "Match each scenario to the type of analytics it represents.",
    c: ["Descriptive", "Diagnostic", "Predictive", "Prescriptive"],
    s: [
      ["A report of last month's revenue by region", 0],
      ["Investigating why product returns increased in March", 1],
      ["Forecasting next quarter's demand", 2],
      ["Recommending the best price for each product", 3]
    ],
    e: "Descriptive analytics shows what happened, diagnostic explains why, predictive forecasts what will happen, and prescriptive recommends what to do."
  },
  {
    t: "complete",
    q: "{0} files store data by column, which makes them efficient for analytical queries that read only some columns.",
    b: [
      { o: ["Parquet", "CSV", "JSON", "XML"], a: 0 }
    ],
    e: "Parquet is a columnar format with strong compression, so analytical engines can read just the columns a query needs. CSV, JSON and XML are row-oriented text formats."
  },
  {
    t: "complete",
    q: "In a transaction, the ACID property of {0} ensures that committed changes survive a power failure or crash.",
    b: [
      { o: ["atomicity", "consistency", "isolation", "durability"], a: 3 }
    ],
    e: "Durability guarantees that committed changes are permanently recorded, usually in a transaction log on persistent storage. Atomicity is all-or-nothing, consistency keeps data valid, and isolation stops concurrent transactions interfering."
  },
  {
    t: "complete",
    q: "Processing each record as soon as it arrives is called {0} processing, while processing data collected over a period, on a schedule, is called {1} processing.",
    b: [
      { o: ["stream", "batch", "transactional"], a: 0 },
      { o: ["stream", "batch", "transactional"], a: 1 }
    ],
    e: "Stream processing handles data continuously with low latency. Batch processing collects data and processes it together at scheduled intervals. Transactional processing describes recording business operations in an OLTP system."
  },
  {
    t: "complete",
    q: "A star schema has a central {0} table that stores numeric measures, surrounded by {1} tables that describe the context of those measures.",
    b: [
      { o: ["fact", "dimension", "bridge"], a: 0 },
      { o: ["fact", "dimension", "staging"], a: 1 }
    ],
    e: "Fact tables hold measures such as SalesAmount and keys to dimensions. Dimension tables hold descriptive attributes such as product, customer and date, used to filter and group the facts."
  },
  {
    q: "A retail website needs to store product images that are served to millions of visitors. Which Azure data store should you use?",
    o: ["Azure Blob Storage", "Azure SQL Database", "Azure Table storage", "Azure Cosmos DB for Apache Gremlin"],
    a: [0],
    e: "Blob Storage is object storage designed for unstructured files such as images, and it serves them cheaply over HTTP (often behind a CDN). SQL Database is for relational data, Table storage for key-value entities, and Gremlin for graph data."
  },
  {
    q: "An order-processing application needs ACID transactions, foreign keys and joins across customers, orders and products. Which Azure data store is MOST appropriate?",
    o: ["Azure SQL Database", "Azure Cosmos DB for NoSQL", "Azure Blob Storage", "Azure Files"],
    a: [0],
    e: "Relational databases such as Azure SQL Database enforce relationships with foreign keys, support joins and provide ACID transactions. Cosmos DB favours flexible documents and scale, and Blob Storage and Azure Files store files."
  },
  {
    q: "A mobile game stores player profiles as JSON and needs single-digit millisecond reads and writes for players worldwide. Which data store fits best?",
    o: ["Azure Cosmos DB", "Azure SQL Managed Instance", "Azure Files", "Azure Synapse dedicated SQL pool"],
    a: [0],
    e: "Cosmos DB stores JSON documents, replicates them globally and guarantees low latency. Managed Instance is a relational engine, Azure Files provides file shares, and a dedicated SQL pool is an analytical data warehouse."
  },
  {
    q: "Several virtual machines need to share configuration files through a mapped network drive. Which Azure data store should you use?",
    o: ["Azure Files", "Azure Blob Storage", "Azure Table storage", "Azure Cosmos DB"],
    a: [0],
    e: "Azure Files provides SMB and NFS shares that many machines can mount at the same time. Blob Storage is accessed over HTTP rather than mounted as a drive, and Table storage and Cosmos DB are databases."
  },
  {
    q: "A data engineering team needs to store raw CSV, JSON and Parquet files in folders for large-scale analytics with Spark. Which Azure data store should it use?",
    o: ["Azure Data Lake Storage Gen2", "Azure SQL Database", "Azure Table storage", "Azure Files"],
    a: [0],
    e: "ADLS Gen2 (Blob Storage with a hierarchical namespace) is built for analytics: directories, POSIX-style ACLs and high throughput for Spark and SQL engines. The other options are not designed for big data file processing."
  },
  {
    q: "Which two Azure data stores are designed for relational data? (Choose two.)",
    o: ["Azure SQL Database", "Azure Database for PostgreSQL", "Azure Blob Storage", "Azure Cosmos DB for MongoDB", "Azure Table storage"],
    a: [0, 1],
    e: "Azure SQL Database and Azure Database for PostgreSQL are relational database services. Blob Storage holds objects, Cosmos DB for MongoDB holds documents, and Table storage holds key-value entities."
  },
  {
    t: "match",
    q: "Match each scenario to the most appropriate Azure data store.",
    c: ["Azure SQL Database", "Azure Cosmos DB", "Azure Blob Storage", "Azure Files", "Microsoft Fabric lakehouse"],
    s: [
      ["An invoicing system that needs transactions and joins", 0],
      ["A globally distributed shopping cart with millisecond latency", 1],
      ["Backups and video files stored at low cost", 2],
      ["A shared folder mapped as a network drive", 3],
      ["Raw files and Delta tables for enterprise analytics", 4]
    ],
    e: "Transactional relational data belongs in Azure SQL Database. Global, low-latency operational data suits Cosmos DB. Blob Storage is cheap object storage for files. Azure Files provides shares. A Fabric lakehouse combines files and Delta tables for analytics."
  },
  {
    t: "match",
    q: "Match each type of data to the Azure service most often used to store it.",
    c: ["Azure SQL Database", "Azure Cosmos DB for NoSQL", "Azure Blob Storage"],
    s: [
      ["Rows of customer orders with a fixed schema", 0],
      ["JSON documents whose fields vary from item to item", 1],
      ["Scanned PDF contracts and photos", 2]
    ],
    e: "Structured data maps naturally to a relational database, semi-structured JSON to a document database such as Cosmos DB for NoSQL, and unstructured files to Blob Storage."
  },
  {
    t: "yesno",
    q: "Consider these statements about choosing Azure data stores.",
    s: [
      ["Azure Blob Storage is a good choice for unstructured data such as images and video.", true],
      ["Azure Cosmos DB is the best choice when you need complex joins across many related tables.", false],
      ["Azure SQL Database suits transactional workloads that need ACID guarantees.", true]
    ],
    e: "1 Yes: Blob Storage is designed for unstructured objects. 2 No: Cosmos DB queries run within one container and don't support joins across containers; complex relational joins suit a relational database. 3 Yes: Azure SQL Database provides full ACID transactions."
  },
  {
    t: "complete",
    q: "For JSON documents that must be replicated to several regions with low latency, use {0}; for structured data that needs transactions and joins, use {1}.",
    b: [
      { o: ["Azure Cosmos DB", "Azure SQL Database", "Azure Blob Storage"], a: 0 },
      { o: ["Azure Cosmos DB", "Azure SQL Database", "Azure Files"], a: 1 }
    ],
    e: "Cosmos DB is a globally distributed document database with low-latency guarantees. Azure SQL Database is a relational database with joins, constraints and ACID transactions."
  },
  {
    q: "A company wants one store for analytics where data engineers use Spark and analysts use SQL and Power BI over the same data. Which option fits best?",
    o: ["A Microsoft Fabric lakehouse", "Azure Table storage", "Azure Files"],
    a: [0],
    e: "A Fabric lakehouse stores Delta tables in OneLake that Spark notebooks, the SQL analytics endpoint and Power BI (Direct Lake) can all use. Table storage is a key-value store and Azure Files is a file share."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure Table storage is a good choice for large volumes of structured, non-relational data that is looked up by key.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Table storage is a low-cost key-attribute store designed for this pattern, such as device metadata or user preferences retrieved by PartitionKey and RowKey."
  },
  {
    q: "Which statement describes structured data?",
    o: ["Data follows a fixed schema, so every record has the same fields", "Each record describes itself with tags or key-value pairs that can vary", "Data has no internal organisation, such as images and audio files", "Data is always stored in a data lake as compressed Parquet files"],
    a: [0],
    e: "Structured data adheres to a fixed schema, typically as rows and columns in a table. Self-describing, varying records are semi-structured, and data with no internal organisation is unstructured."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nSemi-structured data must be converted to a relational schema before it can be stored.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. Semi-structured data such as JSON can be stored as-is in document databases (for example Cosmos DB), in files in a data lake, or even in JSON columns in a relational database."
  },
  {
    q: "Which two statements describe unstructured data? (Choose two.)",
    o: ["It has no predefined data model or fields", "It includes documents, images, audio and video", "Every record has the same columns", "Each field is described by a key-value pair", "It can only be stored in relational tables"],
    a: [0, 1],
    e: "Unstructured data lacks a field structure and includes media and free-form documents. Identical columns describe structured data, key-value fields describe semi-structured data, and unstructured data is usually kept in object storage, not tables."
  },
  {
    t: "yesno",
    q: "Consider these statements about ways to represent data.",
    s: [
      ["Structured data is usually stored in tables with a fixed schema.", true],
      ["JSON is an example of unstructured data.", false],
      ["Video files are an example of unstructured data.", true]
    ],
    e: "1 Yes: structured data fits rows and columns. 2 No: JSON is semi-structured because it carries field names and structure. 3 Yes: video has no field structure, so it is unstructured."
  },
  {
    q: "What is the main difference between a file store and a database?",
    o: ["A database manages data with a query engine, indexes and transactions; a file store keeps files as written", "A file store enforces a schema on every file, while a database stores files in their native format", "Databases can store only structured data, while file stores can store only plain text files", "There is no difference, because both terms describe exactly the same kind of data store"],
    a: [0],
    e: "File stores (such as Blob Storage or Azure Files) hold files without understanding their contents. Databases organise data so a query engine can search, update and protect it with indexes, constraints and transactions."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nA relational database is the best type of data store for every kind of data.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. Relational databases suit structured, related data that needs transactions. Media files belong in object storage, flexible documents in document databases, and highly connected data in graph databases."
  },
  {
    t: "match",
    q: "Match each type of data store to the data it suits best.",
    c: ["Relational database", "Document database", "Graph database", "Object storage"],
    s: [
      ["Orders and customers with fixed schemas and relationships", 0],
      ["Product catalog entries with varying attributes", 1],
      ["A fraud-detection network of accounts and transfers", 2],
      ["Images, video and backup files", 3]
    ],
    e: "Relational databases handle fixed schemas and relationships, document databases handle varying attributes, graph databases handle connected networks, and object storage handles large files."
  },
  {
    t: "yesno",
    q: "Consider these statements about transactional workloads.",
    s: [
      ["OLTP systems typically use ACID transactions.", true],
      ["Transactional workloads usually run long queries that scan years of history.", false],
      ["Transactional systems often store data in normalized tables.", true]
    ],
    e: "1 Yes: ACID transactions keep business records accurate. 2 No: long historical scans are analytical; OLTP operations are short and touch few rows. 3 Yes: normalization avoids duplication and update anomalies."
  },
  {
    t: "complete",
    q: "A transactional workload is typically {0}-heavy, with many small inserts and updates, while an analytical workload is typically {1}-heavy.",
    b: [
      { o: ["write", "read"], a: 0 },
      { o: ["write", "read"], a: 1 }
    ],
    e: "OLTP systems constantly record new transactions, so they handle a high volume of writes. Analytical systems are loaded periodically and then queried many times, so they are read-heavy."
  },
  {
    q: "How does data usually get into an analytical store such as a data warehouse?",
    o: ["It is copied from operational systems, cleaned and loaded in batches or streams", "Users type it directly into the warehouse through data entry forms", "It is created by the warehouse's own business transactions", "Database administrators enter it manually once a year"],
    a: [0],
    e: "Analytical stores are fed by ingestion pipelines (ETL/ELT or streaming) that extract data from operational systems, transform it and load it. They are not usually the system of record for transactions."
  },
  {
    q: "Which two are characteristics of analytical workloads? (Choose two.)",
    o: ["Data is mostly read rather than updated", "Queries aggregate large volumes of historical data", "Each operation inserts or updates a single row", "Data must be fully normalized to third normal form", "Every query must return within one millisecond"],
    a: [0, 1],
    e: "Analytical workloads read and aggregate large amounts of history. Single-row writes and strict normalization are transactional traits, and analytical queries can take seconds or longer."
  },
  {
    q: "Users report timeouts because a production database is running slowly. Which role is MOST likely to investigate and tune the database?",
    o: ["Database administrator", "Data analyst", "Data engineer", "Report consumer"],
    a: [0],
    e: "Database administrators monitor and optimise database performance, along with security, backups and availability. Data analysts build reports, and data engineers build pipelines."
  },
  {
    q: "Which role makes sure data from many sources is integrated, cleaned and made available for analysis?",
    o: ["Data engineer", "Database administrator", "Data analyst"],
    a: [0],
    e: "Data engineers design and run the ingestion and transformation pipelines and the analytical stores. Database administrators manage operational databases, and data analysts use the prepared data."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nData engineers are typically responsible for designing Power BI dashboards for executives.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. Designing reports and dashboards is the data analyst's job. Data engineers prepare the data that those reports use."
  },
  {
    t: "match",
    q: "Match each type of storage to the Azure service that provides it.",
    c: ["Azure Disk Storage", "Azure Files", "Azure Blob Storage"],
    s: [
      ["Block storage: a virtual hard disk attached to a VM", 0],
      ["File storage: a share that colleagues and VMs mount", 1],
      ["Object storage: upload and download objects through a REST API", 2]
    ],
    e: "Block storage behaves like a hard disk attached to one machine (Azure Disks). File storage is a shared folder that many clients mount (Azure Files). Object storage stores whole objects accessed over HTTP/REST without mounting (Blob Storage)."
  },
  {
    q: "You want to upload and download files through a REST API without mounting any storage on a virtual machine. Which type of storage and Azure service should you use?",
    o: ["Object storage: Azure Blob Storage", "Block storage: Azure Disk Storage", "File storage: Azure Files", "Key-value storage: Azure Table storage"],
    a: [0],
    e: "Object storage is accessed over HTTP/REST and needs no mounting, which is how Azure Blob Storage works. Disks are attached to VMs as block devices, Azure Files shares are mounted over SMB or NFS, and Table storage holds key-value entities rather than files."
  },
  {
    q: "Which Azure data store is designed for analysing petabytes of historical, structured data with massively parallel processing?",
    o: ["Azure Synapse Analytics (dedicated SQL pool)", "Azure SQL Database (General Purpose tier)", "Azure Cosmos DB for NoSQL", "Azure Table storage"],
    a: [0],
    e: "Synapse dedicated SQL pools are MPP data warehouses built for petabyte-scale analytics (Fabric Warehouse is the SaaS equivalent). Azure SQL Database is designed for transactional workloads, Cosmos DB for operational NoSQL data, and Table storage for simple key-value data."
  },
  {
    q: "Why do analytical (OLAP) databases usually store data by column rather than by row?",
    o: ["Column storage compresses well and lets aggregate queries read only the columns they need", "Column storage makes single-row inserts and updates faster for transactional apps", "Column storage is required for primary keys and foreign keys to work correctly", "Column storage allows each row in a table to have a different set of columns"],
    a: [0],
    e: "Storing each column together gives high compression and lets queries such as SUM(Revenue) scan just one column, which suits analytics. Row storage keeps whole rows together, which suits OLTP inserts and updates. Keys work in both layouts, and varying columns per row describes column-family NoSQL stores."
  },
  {
    t: "complete",
    q: "OLTP databases typically use {0} storage, while OLAP databases typically use {1} storage.",
    b: [
      { o: ["row", "columnar"], a: 0 },
      { o: ["row", "columnar"], a: 1 }
    ],
    e: "Row storage keeps a whole record together, which is efficient for small transactions. Columnar storage keeps each column together, giving better compression and faster aggregations over large tables."
  },
  {
    q: "In a typical OLTP workload, what is the usual balance of reads and writes?",
    o: ["Heavy writes with moderate reads, processed quickly", "Rare writes with very large, complex reads", "Only reads, because data is loaded once a year", "Only writes, because the data is never queried"],
    a: [0],
    e: "OLTP systems, such as banking and e-commerce, record many small transactions (heavy writes) and also read current data, all with fast response times. Rare writes with large aggregate reads describe OLAP."
  },
  {
    t: "match",
    q: "Match each scaling approach to its description.",
    c: ["Horizontal scaling (scale out)", "Vertical scaling (scale up)"],
    s: [
      ["Adding more servers or partitions to share the load", 0],
      ["Adding CPU and memory to a single server", 1],
      ["The main way Azure Cosmos DB grows to handle more data and throughput", 0]
    ],
    e: "Scaling out adds more nodes and spreads data across them, which is how Cosmos DB partitions data. Scaling up gives one server more resources, which is how relational databases have traditionally grown."
  }
]);
