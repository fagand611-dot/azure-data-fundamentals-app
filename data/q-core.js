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
    o: ["A JSON document describing a customer and a variable list of addresses", "A table in an Azure SQL Database", "An MP4 video file", "A scanned PDF of a signed contract"],
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
    o: ["ORC (Optimized Row Columnar)", "Avro", "CSV", "JSON"],
    a: [0],
    e: "ORC (Optimized Row Columnar) stores data in stripes, each holding columnar data plus statistics. It was built to optimise Apache Hive reads and writes. Avro is row-based; CSV and JSON are text formats."
  },
  {
    q: "What is a BLOB?",
    o: ["Binary Large Object: binary data such as an image or video stored as a single unit", "A table that stores large amounts of relational data", "A type of index used to speed up queries", "A JSON document stored in a document database"],
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
    o: ["Storing product catalog entries where each product has different attributes", "Enforcing referential integrity between orders and customers", "Storing a social network of relationships between people", "Running complex multi-table joins for financial reporting"],
    a: [0],
    e: "Document databases store self-describing documents (usually JSON) whose structure can vary, which suits catalogs where a laptop and a shirt have very different attributes. Referential integrity and multi-table joins are strengths of relational databases, and relationship-heavy data suits graph databases."
  },
  {
    q: "What is the main characteristic of an online transaction processing (OLTP) system?",
    o: ["It handles many small, fast reads and writes that record day-to-day business transactions", "It runs long, complex queries over historical data for reporting", "It stores data only in columnar files in a data lake", "It processes data once a day in large batches"],
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
    o: ["Organising data into separate related tables to reduce duplication and improve data integrity", "Combining all data into a single wide table to speed up reporting", "Converting data into a columnar file format", "Encrypting data so only authorised users can read it"],
    a: [0],
    e: "Normalization splits data into multiple related tables, each describing one entity, linked by keys. This removes duplicated values, so an update happens in one place, and reduces anomalies. Analytical models often deliberately denormalize to make queries simpler and faster."
  },
  {
    q: "Which statement describes a primary key?",
    o: ["A column or set of columns that uniquely identifies each row in a table", "A column that references a row in another table", "An index that stores data in columnar format", "A password required to read a table"],
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
    o: ["Returns the name and price of products costing more than 100, most expensive first", "Deletes products costing more than 100", "Returns all columns for products costing exactly 100", "Updates the price of products to 100"],
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
    o: ["A virtual table based on the result set of a SELECT query", "A physical copy of a table stored on disk", "A stored set of permissions", "A backup of a database"],
    a: [0],
    e: "A view is a saved query that you can select from as if it were a table. It stores no data itself (unless it is an indexed/materialized view). Views are used to simplify complex joins and to restrict which columns or rows users can see."
  },
  {
    q: "What is a stored procedure?",
    o: ["A named set of SQL statements saved in the database that can be run with parameters", "A table that stores procedure documentation", "An index that speeds up joins", "A backup schedule for a database"],
    a: [0],
    e: "A stored procedure encapsulates SQL logic in the database. It can accept parameters, perform inserts, updates and other operations, and be reused by applications. This centralises business logic and can improve security and performance."
  },
  {
    q: "What is the main purpose of an index on a table?",
    o: ["To help queries find rows faster, similar to an index at the back of a book", "To enforce that values in a column are unique", "To encrypt sensitive columns", "To store a copy of the table in another region"],
    a: [0],
    e: "An index is a structure that lets the database locate rows matching a search condition without scanning the whole table. Indexes speed up reads but add overhead to inserts, updates and deletes, because the index must also be maintained."
  },
  {
    q: "Which is a drawback of adding many indexes to a table?",
    o: ["Inserts, updates and deletes become slower because each index must be maintained", "SELECT queries always become slower", "The table can no longer have a primary key", "The table must be stored in a data lake"],
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
    o: ["Azure Data Factory and Azure Synapse Analytics pipelines", "Power BI Desktop report themes", "Microsoft Entra ID user provisioning", "Microsoft Excel conditional formatting"],
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
    o: ["Processing data continuously, in real time or near real time, as each new record arrives", "Processing large groups of data on a schedule", "Copying files between storage accounts", "Running the same query against many databases"],
    a: [0],
    e: "Stream processing handles data as an unbounded, continuous flow and produces results within seconds or milliseconds. Typical uses are IoT telemetry monitoring, fraud detection and live dashboards."
  },
  {
    q: "Which two statements describe batch processing compared with stream processing? (Choose two.)",
    o: ["It can process large volumes of data efficiently at a scheduled time", "There is a delay (latency) between when data is generated and when results are available", "It produces results within milliseconds of an event occurring", "It always works on a single record at a time", "It requires data to be stored in a graph database"],
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
    o: ["It typically works on a rolling time window or individual events and requires low latency", "It requires all data to be available before processing starts", "It is mainly used for complex analysis of years of historical data", "It cannot be used with IoT devices"],
    a: [0],
    e: "Streaming analyses data within small time windows (for example, the last 30 seconds) or event by event, with latency of seconds or less. Batch processing works on complete, bounded datasets and suits complex historical analysis."
  },
  {
    q: "What is a data warehouse?",
    o: ["A relational store optimised for read-heavy analytical queries over integrated historical data", "A store for raw files in their native format", "A transactional database for a single application", "A messaging service for event data"],
    a: [0],
    e: "A data warehouse integrates data from multiple sources into a schema (usually star or snowflake) designed for analytical queries and reporting. A data lake, by contrast, stores raw files of any format in their native form."
  },
  {
    q: "What is a data lake?",
    o: ["A repository that stores large volumes of raw data as files in their native format", "A relational database optimised for OLTP", "A dashboard that combines visuals from many reports", "A table that stores only aggregated data"],
    a: [0],
    e: "A data lake holds structured, semi-structured and unstructured data as files, often applying a schema only when the data is read (schema-on-read). In Azure, data lakes are typically built on Azure Data Lake Storage Gen2 or OneLake in Microsoft Fabric."
  },
  {
    q: "What does 'schema-on-read' mean?",
    o: ["Data is stored raw and a structure is applied when the data is queried", "A schema must be defined before data can be written", "The schema is stored inside each row of a table", "Only users with read permissions can see the schema"],
    a: [0],
    e: "With schema-on-read, data is stored in its original form (common in data lakes) and the schema is projected onto it at query time. Relational databases and warehouses use schema-on-write, where data must match the table schema when it is inserted."
  },
  {
    q: "What is a data lakehouse?",
    o: ["An architecture that combines data lake file storage with relational, warehouse-like querying and transactional table formats", "A relational database that is hosted on-premises", "A Power BI workspace that contains only dashboards", "A key-value store optimised for low-latency lookups"],
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
    o: ["In ELT, data is loaded into the target store first and then transformed there", "In ELT, data is never transformed", "ELT can only be used for streaming data", "ELT encrypts data before loading it"],
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
    o: ["Dimension tables are normalized into additional related tables", "There are multiple fact tables with no dimensions", "All data is stored in a single table", "It can only be used in non-relational databases"],
    a: [0],
    e: "In a snowflake schema, dimensions are normalized. For example, Product links to a separate Category table, which links to a Department table. In a star schema each dimension is a single denormalized table directly connected to the fact table."
  },
  {
    q: "Why are analytical data models often denormalized?",
    o: ["To reduce the number of joins needed and make read queries faster and simpler", "To reduce the amount of storage used", "To make inserts and updates faster", "To enforce stricter data integrity"],
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
    o: ["Grouping and filtering facts by date attributes such as year, quarter, month and weekday", "Storing the time a user logged in", "Encrypting timestamps", "Scheduling pipeline runs"],
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
    o: ["Where data originated and how it moved and was transformed on the way to its current location", "The number of users who queried a table", "The physical disk where data is stored", "The order in which rows were inserted"],
    a: [0],
    e: "Lineage traces data from source through transformations to its destination (for example, from a SQL table through a pipeline to a Power BI report). It helps with impact analysis, troubleshooting and compliance."
  },
  {
    q: "Which category of data includes information captured as a by-product of devices, such as sensor readings sent every few seconds?",
    o: ["Telemetry / streaming data", "Master data", "Reference data", "Archived data"],
    a: [0],
    e: "IoT devices emit telemetry continuously, producing a stream of time-stamped events. Such data is usually ingested via services such as Azure IoT Hub or Event Hubs and processed with stream analytics."
  },
  {
    q: "Which statement about relational databases is true?",
    o: ["Data is stored in tables of rows and columns, and every row in a table has the same columns", "Each record can have a completely different set of fields", "Relationships are stored as edges between nodes", "Data is stored as files in their native format"],
    a: [0],
    e: "Relational databases model data as tables with a fixed schema. Varying fields per record describes document stores, edges between nodes describes graph databases, and native-format files describes data lakes."
  },
  {
    q: "Which two benefits are provided by using a relational database for an order processing system? (Choose two.)",
    o: ["Support for ACID transactions", "Enforcement of relationships with foreign keys", "Storing each order as an unstructured video file", "Automatic schema-on-read for any file format", "Effortless horizontal scale-out with no schema to maintain"],
    a: [0, 1],
    e: "Relational databases provide ACID transactions and enforce referential integrity with primary and foreign keys, both valuable for orders, customers and payments. Schema-on-read for arbitrary files is a data lake characteristic. Schema-free, effortless scale-out is usually a strength of NoSQL stores, not relational databases."
  },
  {
    q: "You need to store large amounts of JSON telemetry from millions of devices with very low-latency writes, and the schema will change frequently. Which type of data store is MOST appropriate?",
    o: ["A non-relational (NoSQL) database such as Azure Cosmos DB", "A normalized relational database", "A star schema in a data warehouse", "An Excel workbook in SharePoint"],
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
    o: ["Replicas may briefly return older data, but all copies converge to the same value over time", "All reads always return the latest committed write", "Data is never replicated", "Transactions are rolled back if replicas disagree"],
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
    o: ["Data engineers build and manage the pipelines and stores that make data available; data analysts explore that data and create reports and insights", "Data analysts manage database backups; data engineers build dashboards", "There is no difference; the roles are identical", "Data engineers only work with unstructured data"],
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
    o: ["A primary key made up of two or more columns", "A key used to encrypt a database", "A foreign key that references itself", "A key stored in Azure Key Vault"],
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
    o: ["Pre-aggregating data across dimensions so analytical queries such as 'sales by region by quarter' return quickly", "Capturing individual web orders in real time", "Storing binary images", "Managing user permissions"],
    a: [0],
    e: "An OLAP model stores data aggregated across hierarchies of dimensions (for example, Year > Quarter > Month), so business users can slice, dice and drill down quickly without scanning detailed transactional data."
  },
  {
    q: "Which two are examples of data that would typically be processed by an analytical workload rather than a transactional one? (Choose two.)",
    o: ["Five years of sales history used to identify seasonal trends", "A daily aggregate of website visits used in a management dashboard", "A customer placing an order on an e-commerce site", "An ATM withdrawal debiting an account", "Updating a customer's delivery address"],
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
    o: ["Microsoft SQL Server and Azure SQL", "PostgreSQL", "MySQL", "Oracle Database"],
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
    o: ["All rows in the Customers table are deleted, but the table remains", "The Customers table is dropped from the database", "Nothing happens because a WHERE clause is required", "Only the first row is deleted"],
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
    o: ["It can contain nested and repeating elements", "Each entity is self-describing, with field names stored alongside values", "It must conform to a fixed schema defined before data is written", "It has no organisational properties at all", "It can only be stored in relational tables"],
    a: [0, 1],
    e: "Semi-structured formats like JSON and XML include field names with values (self-describing) and support nesting and arrays. A fixed predefined schema describes structured data, and no organisation at all describes unstructured data. Semi-structured data is usually kept in files or document databases; it is not limited to relational tables."
  },
  {
    q: "What is the purpose of the data visualisation stage in an analytics process?",
    o: ["To present data in charts and reports so people can understand trends and make decisions", "To compress data for storage", "To copy data between regions", "To define primary keys"],
    a: [0],
    e: "Visualisation turns processed data into charts, maps and dashboards that make patterns and outliers easy to see. In Azure, Power BI is the primary visualisation tool."
  },
  {
    q: "Which describes 'data ingestion'?",
    o: ["Capturing raw data from sources and bringing it into a data store or processing system", "Deleting old data that is no longer needed", "Displaying data in a dashboard", "Granting access to a database"],
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
    o: ["Data characterised by very high volume, velocity and/or variety that is hard to handle with traditional tools", "Any table with more than 100 rows", "Data stored only in Excel", "Data that is always structured"],
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
  }
]);
