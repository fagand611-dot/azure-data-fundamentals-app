/*
 * Memory aids shown under each explanation, adapted from the DP-900 course notes
 * (in28minutes "DP-900: Microsoft Azure Data Fundamentals in a Weekend") and corrected
 * where Azure has changed since the course was recorded.
 *
 * DP900.glossary holds key terms by topic: [term, definition, example].
 * DP900.tips holds the rules. Rules are checked in order; a question gets the first match.
 *   sk   - outline objective codes the rule applies to (any of them)
 *   re   - pattern tested against the question text, statements and match items (not the answer
 *          options, so a wrong option can't pull in an unrelated aid); case-insensitive
 *   tip  - the one-line memory aid
 *   defs - glossary topics whose key terms are listed under the memory aid
 * A rule with both sk and re needs both to match.
 */
window.DP900.glossary = {
  acid: [
    ['Transaction', 'A group of operations treated as one unit of work: either all of them happen or none do.', 'Debit €100 from account A and credit it to account B.'],
    ['Atomicity', 'All or nothing. If any step fails, every change in the transaction is rolled back.', 'If the credit to B fails, the debit from A is undone, so no money disappears.'],
    ['Consistency', 'A transaction takes the database from one valid state to another, respecting every rule and constraint.', 'The total across both accounts is the same before and after the transfer.'],
    ['Isolation', 'Concurrent transactions don\'t see each other\'s unfinished changes; each behaves as if it ran alone.', 'Two cashiers updating the same stock level don\'t overwrite each other\'s half-finished work.'],
    ['Durability', 'Once a transaction is committed, its changes survive power loss, crashes and restarts.', 'A confirmed payment is still recorded after the server reboots.'],
    ['COMMIT / ROLLBACK', 'COMMIT makes a transaction\'s changes permanent; ROLLBACK undoes them all.', 'Both transfer steps succeed → COMMIT; either fails → ROLLBACK.']
  ],
  sqlCategories: [
    ['DDL (Data Definition Language)', 'Creates, changes and removes database objects such as tables, views and indexes.', 'CREATE TABLE Course (...); ALTER TABLE ...; DROP TABLE Course;'],
    ['DQL (Data Query Language)', 'Reads data. Some sources count SELECT as part of DML.', 'SELECT Title FROM Course WHERE Id = 1;'],
    ['DML (Data Manipulation Language)', 'Adds, changes and deletes the rows inside tables.', 'INSERT INTO Course ...; UPDATE Course SET ...; DELETE FROM Course WHERE ...;'],
    ['DCL (Data Control Language)', 'Manages permissions on database objects.', 'GRANT SELECT ON Course TO analyst; REVOKE SELECT ON Course FROM analyst;'],
    ['TCL (Transaction Control Language)', 'Ends or undoes transactions.', 'COMMIT; ROLLBACK;']
  ],
  sqlClauses: [
    ['SELECT ... FROM', 'Chooses which columns to return and which table to read them from.', 'SELECT Name, Price FROM Products'],
    ['WHERE', 'Filters individual rows before any grouping.', 'WHERE Price > 100'],
    ['JOIN', 'Combines rows from two tables on a related column. INNER keeps only matches; LEFT also keeps unmatched rows from the left table.', 'Orders JOIN Customers ON Orders.CustomerID = Customers.CustomerID'],
    ['GROUP BY', 'Makes one result row per group so aggregates such as SUM and COUNT are calculated per group.', 'SELECT Category, SUM(Amount) ... GROUP BY Category'],
    ['HAVING', 'Filters groups after aggregation.', 'HAVING SUM(Amount) > 10000'],
    ['ORDER BY', 'Sorts the results, ascending by default or DESC for descending.', 'ORDER BY Price DESC']
  ],
  keys: [
    ['Primary key', 'Column(s) that uniquely identify each row. Must be unique and never NULL; one per table.', 'CustomerID in the Customers table.'],
    ['Foreign key', 'Column that references a primary key in another table, linking the two tables.', 'Orders.CustomerID references Customers.CustomerID.'],
    ['Referential integrity', 'The rule, enforced by foreign keys, that a reference must point to a row that exists, so there are no orphaned rows.', 'You can\'t create an order for customer 999 if customer 999 doesn\'t exist.'],
    ['Composite key', 'A primary key made of two or more columns because no single column is unique.', 'OrderID + LineNumber in an OrderLines table.'],
    ['Constraints', 'Rules on column values: NOT NULL (value required), UNIQUE (no duplicates), CHECK (condition), DEFAULT (fallback value).', 'CHECK (Quantity > 0)']
  ],
  normalization: [
    ['Normalization', 'Splitting data into related tables so each fact is stored once. The goals are less redundancy and better integrity.', 'Move customer details out of every order row into a Customers table.'],
    ['Redundancy', 'The same data stored in several places, which risks update anomalies when one copy changes and another doesn\'t.', 'A customer\'s address repeated on 500 order rows.'],
    ['First normal form (1NF)', 'Every column holds a single, atomic value, with no repeating groups.', 'Not allowed: a Phones column holding "555-1234, 555-9876".'],
    ['Second normal form (2NF)', '1NF, plus every non-key column depends on the whole primary key, not just part of it.', 'ProductName belongs in Products, not in OrderLines keyed by OrderID + ProductID.'],
    ['Third normal form (3NF)', '2NF, plus no column depends on another non-key column. Usually good enough for transactional databases.', 'Country manager moves to a Countries table rather than sitting on every customer row.'],
    ['Denormalization', 'Deliberately combining tables and accepting duplication to make reads faster. Common in analytical models.', 'A star schema with a wide Product dimension.']
  ],
  dbObjects: [
    ['Table', 'Stores data in rows (records) and columns (attributes); every row has the same columns.', 'A Customers table with CustomerID, Name and Country.'],
    ['View', 'A virtual table defined by a saved SELECT query. It stores no data of its own.', 'A view joining Orders and Customers that hides the customers\' email addresses.'],
    ['Stored procedure', 'Named, reusable SQL code saved in the database that can take parameters.', 'EXEC PlaceOrder @CustomerID = 1, @ProductID = 7'],
    ['Index', 'A structure that lets the database find rows without scanning the whole table. It speeds up reads but slows writes. A primary key creates one automatically.', 'An index on Orders.CustomerID for fast customer lookups.'],
    ['Clustered index', 'Sorts and stores the table\'s rows in index order, so there is only one per table.', 'A clustered index on OrderID.'],
    ['Non-clustered index', 'A separate structure holding index values with pointers to the rows; a table can have many.', 'Non-clustered indexes on Email and on LastName.']
  ],
  serviceModels: [
    ['IaaS (infrastructure as a service)', 'The provider runs the hardware, network and virtualization; you manage the OS, software and data.', 'SQL Server installed on an Azure virtual machine.'],
    ['PaaS (platform as a service)', 'The provider also runs the OS and database engine, including patching, backups and high availability; you manage data, schema and access.', 'Azure SQL Database, Azure Cosmos DB.'],
    ['SaaS (software as a service)', 'A complete application delivered over the internet; you manage only users, settings and your data.', 'Microsoft 365, Outlook, Microsoft Fabric.'],
    ['Shared responsibility', 'The split of duties between you and the provider. Whatever the model, your data and user access stay your responsibility.', 'In PaaS, Microsoft patches the OS; you still decide who can read the tables.']
  ],
  azureSql: [
    ['Azure SQL Database', 'Fully managed PaaS SQL Server database, always on the latest engine. Best for new cloud applications.', 'A new web app that needs a relational database with no server to manage.'],
    ['Azure SQL Managed Instance', 'Fully managed SQL Server instance with near-100% compatibility (SQL Agent, Database Mail, cross-database queries). vCore model only.', 'Lift-and-shift of dozens of on-premises databases that use SQL Agent jobs.'],
    ['SQL Server on Azure VMs', 'IaaS: full control of the OS and SQL Server version, and you can install other software on the same machine.', 'An app that needs SQL Server 2014 and SSRS on the same server.'],
    ['Elastic pool', 'Several databases share one pool of compute, which is cheaper when their usage peaks at different times.', '100 small customer databases for a SaaS app.'],
    ['Serverless', 'Compute scales automatically and pauses when idle, so you pay only for storage while paused.', 'A dev database used only in office hours.'],
    ['Hyperscale', 'Service tier for very large databases (up to about 128 TB) with fast scaling and near-instant backups.', 'A rapidly growing 40 TB database.'],
    ['vCore vs DTU', 'vCore: choose compute and storage separately and use Azure Hybrid Benefit (bring your own licence). DTU: simple bundled measure of CPU, memory and I/O.', 'Use DTU to keep a small database simple; vCore to reuse existing SQL licences.'],
    ['Read scale-out', 'Sends read-only queries to a replica so reporting doesn\'t slow the primary.', 'Point the reporting tool at the read-only replica.']
  ],
  openSource: [
    ['Azure Database for MySQL', 'Managed PaaS service for the community MySQL engine; popular for LAMP-stack apps and WordPress.', 'Moving a PHP/MySQL web shop to Azure without code changes.'],
    ['Azure Database for PostgreSQL', 'Managed PaaS service for PostgreSQL, known for extensibility (PostGIS, custom types).', 'A mapping app that needs geospatial queries.'],
    ['Flexible server', 'Current deployment option for both: zone-redundant high availability, maintenance windows, stop/start, and a burstable tier.', 'Stop the dev server overnight to save compute cost.'],
    ['Azure Database for MariaDB', 'A managed MySQL-compatible fork. It was retired in September 2025, but older course material still lists it.', 'Existing MariaDB workloads now move to Azure Database for MySQL.']
  ],
  dataTypes: [
    ['Structured data', 'Follows a fixed schema: every record has the same fields, as rows and columns.', 'A Customers table; a CSV export with the same columns in every row.'],
    ['Semi-structured data', 'Has some organisation (field names, tags) but no fixed schema, so records can differ and nest.', 'JSON documents, XML files.'],
    ['Unstructured data', 'Has no field structure at all.', 'Images, video, audio, PDFs, free-text documents.'],
    ['Schema', 'The definition of the structure data must follow: fields, data types and rules.', 'Name VARCHAR(50) NOT NULL']
  ],
  fileFormats: [
    ['CSV', 'Delimited text: one record per line, fields separated by commas. Human-readable but untyped.', 'Id,Name,City'],
    ['JSON', 'Text format of key-value pairs, nested objects {} and arrays []. Semi-structured.', '{"name": "Ana", "tags": ["vip"]}'],
    ['XML', 'Text format that uses opening and closing tags to describe elements.', '<customer><name>Ana</name></customer>'],
    ['Parquet', 'Open-source binary columnar format with strong compression, ideal for analytics in data lakes.', 'Lakehouse tables in Fabric and Databricks (as Delta).'],
    ['Avro', 'Row-based binary format with a JSON schema header; good for writing records and streaming.', 'Event Hubs Capture writes Avro files.'],
    ['ORC', 'Optimized Row Columnar: columnar format created for Apache Hive, storing data in stripes.', 'Hive tables on Hadoop.']
  ],
  dataStores: [
    ['Relational database', 'Tables with fixed schemas, keys, SQL and ACID transactions.', 'Azure SQL Database for an order system.'],
    ['Document database', 'Stores JSON documents whose fields can differ; queried by their contents.', 'Product catalog in Cosmos DB for NoSQL.'],
    ['Key-value store', 'Looks up an opaque value by a unique key; very fast, but you can\'t query inside values.', 'Session state or a shopping cart in Table storage.'],
    ['Column-family database', 'Groups columns into families; rows can be sparse. Built for huge scale.', 'IoT telemetry in Cosmos DB for Apache Cassandra.'],
    ['Graph database', 'Stores entities as nodes and relationships as edges, for traversing connections.', 'Fraud detection in Cosmos DB for Apache Gremlin.'],
    ['Object, file and block storage', 'Object = whole files over HTTP (Blob Storage) · File = mounted shares (Azure Files) · Block = VM disks (Azure Disks).', 'Profile photos in Blob Storage.'],
    ['Scaling up vs out', 'Up (vertical) = a bigger server. Out (horizontal) = more servers sharing the data.', 'Cosmos DB scales out with partitions.']
  ],
  oltpOlap: [
    ['OLTP (online transaction processing)', 'Many small, fast reads and writes recording current business events; normalized tables and ACID transactions.', 'Banking, online orders, airline bookings.'],
    ['OLAP (online analytical processing)', 'Large, complex, read-heavy queries over historical data, often pre-aggregated by dimensions.', 'Sales trends by region and quarter.'],
    ['Row storage', 'Keeps each whole row together, so writing or reading one record is fast. Used by OLTP.', 'Insert one order row.'],
    ['Columnar storage', 'Keeps each column together, giving high compression and fast aggregates. Used by OLAP.', 'SUM(Revenue) reads only the Revenue column.'],
    ['Read-heavy vs write-heavy', 'OLAP data is loaded in batches, then read many times. OLTP writes constantly.', 'Nightly load, then all-day reporting.']
  ],
  roles: [
    ['Database administrator (DBA)', 'Keeps databases running: backups and restores, security and permissions, availability, performance tuning.', 'Restoring a database after a failure.'],
    ['Data engineer', 'Builds and runs the pipelines and data stores that ingest, clean and integrate data.', 'A pipeline that loads sales data into a lakehouse.'],
    ['Data analyst', 'Explores data and builds models, reports and dashboards that turn it into insight.', 'A Power BI sales dashboard.']
  ],
  starSchema: [
    ['Fact table', 'Records business events with numeric measures and foreign keys to dimensions.', 'FactSales: DateKey, ProductKey, Quantity, SalesAmount.'],
    ['Dimension table', 'Describes the context of facts with attributes used to filter and group.', 'DimProduct: Name, Category, Colour.'],
    ['Star schema', 'One fact table joined directly to denormalized dimension tables; the standard analytical design.', 'FactSales surrounded by Date, Product, Customer and Store.'],
    ['Snowflake schema', 'A star schema whose dimensions are normalized into further tables.', 'Product → Category → Department.'],
    ['Measure', 'A numeric value you aggregate.', 'SUM(SalesAmount)']
  ],
  lakeWarehouse: [
    ['Data warehouse', 'Relational store of cleaned, integrated, historical data designed for reporting (schema-on-write).', 'Synapse dedicated SQL pool, Fabric Warehouse.'],
    ['Data lake', 'Low-cost store of raw files in any format (schema-on-read).', 'CSV, JSON and Parquet files in ADLS Gen2 or OneLake.'],
    ['Lakehouse', 'Data lake files plus a table layer (Delta Lake) that adds schemas, ACID transactions and SQL querying.', 'A Fabric lakehouse or Databricks.'],
    ['Data mart', 'A subject-focused subset of a warehouse for one department.', 'A finance data mart.'],
    ['Schema-on-write vs schema-on-read', 'On write: data must fit the schema when loaded. On read: structure is applied when queried.', 'Warehouse tables vs raw lake files.'],
    ['Delta Lake', 'Open-source table format: Parquet files plus a transaction log, giving ACID transactions and time travel.', 'Every Fabric lakehouse table.']
  ],
  mpp: [
    ['Massively parallel processing (MPP)', 'Splits data and work across many compute nodes that run at the same time.', '10 nodes each scan 100 million of 1 billion rows.']
  ],
  etl: [
    ['ETL', 'Extract, transform, then load: data is reshaped in a processing engine before it reaches the target.', 'Clean orders in Data Factory, then load them into the warehouse.'],
    ['ELT', 'Extract, load, then transform: raw data lands first and the target\'s scalable compute transforms it. Favoured in the cloud.', 'Land raw files in the lake, then transform them with Spark or SQL.'],
    ['Pipeline', 'An orchestrated series of data movement and transformation steps, usually scheduled or event-triggered.', 'A nightly Data Factory pipeline.']
  ],
  lifecycle: [
    ['Ingestion', 'Collecting data from source systems into a store or processing service.', 'Data Factory (batch) or Event Hubs (streaming).'],
    ['Processing', 'Cleaning, transforming, deduplicating and enriching data.', 'Spark in Databricks, Synapse or Fabric.'],
    ['Storage', 'Keeping raw and curated data for analysis.', 'ADLS Gen2, OneLake, a data warehouse.'],
    ['Analysis', 'Querying and exploring data, including machine learning.', 'SQL queries, Spark notebooks.'],
    ['Visualization', 'Presenting results so people can act on them.', 'Power BI reports and dashboards.'],
    ['Azure Data Factory', 'Cloud data integration service that builds and schedules ETL/ELT pipelines with 90+ connectors.', 'Copy 50 sources into the lake every night.']
  ],
  bigData: [
    ['Volume', 'The sheer amount of data.', 'Petabytes, billions of rows.'],
    ['Velocity', 'How fast data arrives.', 'Sensor readings every second, stock ticks.'],
    ['Variety', 'How many different formats there are.', 'SQL tables, JSON, images and video together.']
  ],
  batchStream: [
    ['Batch processing', 'Collects data over a period and processes it together on a schedule. High volume, higher latency.', 'Overnight sales reporting, monthly billing.'],
    ['Stream processing', 'Processes each event continuously as it arrives, with results in seconds or milliseconds.', 'Fraud detection, live IoT dashboards.'],
    ['Latency', 'The delay between data being generated and the result being available.', 'Minutes or hours (batch) vs milliseconds (stream).'],
    ['Window', 'A time slice used to aggregate a stream, such as every 5 minutes.', 'Average temperature per device per 5 minutes.']
  ],
  realtime: [
    ['Azure Event Hubs', 'Big data event ingestion service that receives millions of events per second, with Kafka compatibility.', 'Clickstream events from a website.'],
    ['Azure IoT Hub', 'Ingestion for IoT devices, with per-device identity and commands back to devices.', 'Telemetry from factory sensors.'],
    ['Azure Stream Analytics', 'Managed real-time engine running SQL-like queries over streams (input → query → output).', 'Alert when a sensor exceeds a threshold, output to Power BI.'],
    ['Spark Structured Streaming', 'Stream processing in Spark (Databricks, Synapse, Fabric).', 'A notebook that processes Event Hubs data continuously.'],
    ['Fabric Real-Time Intelligence', 'Fabric workload for streaming: eventstreams capture events, eventhouses store them, KQL queries them, and Activator triggers actions.', 'A real-time dashboard of store foot traffic.'],
    ['KQL (Kusto Query Language)', 'Pipe-based query language for logs and telemetry in Azure Data Explorer and eventhouses.', 'Telemetry | where Temp > 30 | summarize count() by DeviceId']
  ],
  analyticsServices: [
    ['Microsoft Fabric', 'SaaS analytics platform combining data engineering, warehousing, real-time analytics, data science and Power BI on OneLake.', 'One workspace with a lakehouse, a warehouse and reports.'],
    ['OneLake', 'Fabric\'s single, organisation-wide data lake that every workload shares.', 'Delta tables written by Spark and read by Power BI.'],
    ['Azure Databricks', 'Managed Apache Spark platform with collaborative notebooks, Delta Lake and Unity Catalog.', 'Large-scale data engineering and ML.'],
    ['Azure Synapse Analytics', 'Integrated analytics service: dedicated and serverless SQL pools, Spark pools and pipelines. Formerly Azure SQL Data Warehouse.', 'An enterprise data warehouse.'],
    ['Azure HDInsight', 'Managed open-source clusters: Hadoop, Spark, Kafka, HBase, Hive.', 'A Kafka cluster for streaming pipelines.'],
    ['Apache Spark', 'Open-source distributed in-memory processing engine; faster than Hadoop MapReduce.', 'PySpark notebooks.']
  ],
  powerbi: [
    ['Power BI Desktop', 'Free Windows app for connecting to data, modelling it and building reports.', 'Build the sales report, then publish it.'],
    ['Power BI service', 'Cloud service (app.powerbi.com) for sharing, refreshing and collaborating, and where dashboards are created.', 'Publish to a workspace and share an app.'],
    ['Report', 'Multi-page, interactive visuals built on one semantic model.', 'A five-page sales report.'],
    ['Dashboard', 'A single page of tiles pinned from one or more reports, created in the service.', 'An executive KPI dashboard.'],
    ['Workspace and app', 'A workspace is where content is built and shared; an app packages it read-only for a wide audience.', 'Publish a Sales app for 500 users.'],
    ['Semantic model', 'The tables, relationships and measures that reports are built on (formerly called a dataset).', 'One shared model behind several reports.']
  ],
  pbiModel: [
    ['Power Query', 'Connects to sources and cleans and shapes data before it is loaded, using the M language.', 'Remove columns, change data types, merge queries.'],
    ['DAX', 'Formula language for measures, calculated columns and calculated tables.', 'Total Sales = SUM(Sales[Amount])'],
    ['Measure', 'Calculated at query time in the current filter context, so it changes with slicers and visuals.', 'Profit margin by region.'],
    ['Calculated column', 'Computed for each row during refresh and stored in the model.', 'FullName = [First] & " " & [Last]'],
    ['Relationship', 'Links tables (usually one-to-many, dimension to fact) so filters flow between them.', 'Customer (1) → Sales (many).'],
    ['Hierarchy', 'Levels for drilling down.', 'Year → Quarter → Month → Day.'],
    ['Import vs DirectQuery vs Direct Lake', 'Import caches data in memory (refresh needed) · DirectQuery queries the source live · Direct Lake reads Delta tables in OneLake directly.', 'Import for speed; DirectQuery for always-current data.']
  ],
  visuals: [
    ['Line chart', 'Shows change over a continuous axis, usually time.', 'Monthly revenue over two years.'],
    ['Bar or column chart', 'Compares values across categories.', 'Sales by product category.'],
    ['Pie or donut chart', 'Shows parts of a whole for a few categories.', 'Share of sales by channel.'],
    ['Card or KPI', 'Shows a single key number, or a value against a target.', 'Total revenue; progress to the sales goal.'],
    ['Scatter chart', 'Shows the relationship between two numeric measures.', 'Ad spend vs sales per product.'],
    ['Map or filled map', 'Shows values by geography.', 'Sales by country.'],
    ['Table or matrix', 'Shows exact values; a matrix groups rows and columns like a PivotTable.', 'Price, stock and sales per product.']
  ],
  storageServices: [
    ['Storage account', 'The top-level container you need before creating Blob containers, file shares, queues or tables.', 'One general-purpose v2 account holding containers and shares.'],
    ['Blob Storage', 'Object storage for unstructured data over HTTP/REST. Block blobs for files, append blobs for logs, page blobs for VM disks.', 'Product images, backups, video.'],
    ['Azure Files', 'Managed file shares mounted over SMB or NFS by many machines at once.', 'Shared configuration files for several VMs.'],
    ['Azure Disks', 'Block storage: virtual hard disks attached to a VM. Managed disks are recommended.', 'A VM\'s OS disk and data disks.'],
    ['Queue Storage', 'Messages that decouple application components.', 'The web front end queues orders for a background worker.'],
    ['Table Storage', 'Low-cost NoSQL key-value store. Entities are identified by PartitionKey + RowKey; no joins or foreign keys.', 'Device metadata looked up by device ID.'],
    ['Data Lake Storage Gen2', 'Blob Storage with a hierarchical namespace: real directories and POSIX ACLs for big data analytics.', 'The raw zone of a data lake.']
  ],
  redundancy: [
    ['LRS (locally redundant)', 'Three synchronous copies in one datacenter. Cheapest; doesn\'t survive a datacenter failure.', 'Dev/test data.'],
    ['ZRS (zone-redundant)', 'Three synchronous copies across three availability zones in one region; survives a zone failure.', 'Production data that must survive a datacenter outage.'],
    ['GRS (geo-redundant)', 'LRS in the primary region plus an asynchronous copy to a secondary region (six copies in total).', 'Disaster recovery for a regional outage.'],
    ['GZRS (geo-zone-redundant)', 'ZRS in the primary region plus a copy to a secondary region. Most resilient and most expensive.', 'Business-critical data.'],
    ['RA-GRS / RA-GZRS', 'Read-access versions that let you read from the secondary region at any time.', 'Serve reads from the secondary during an outage.']
  ],
  tiers: [
    ['Hot', 'Lowest access cost, highest storage cost; for frequently used data.', 'Website images.'],
    ['Cool', 'Cheaper storage, higher access cost; for infrequent access kept 30+ days.', 'Last month\'s reports.'],
    ['Cold', 'Cheaper again; for rarely accessed data kept 90+ days that must still be readable immediately.', 'Older invoices.'],
    ['Archive', 'Cheapest, offline tier for data kept 180+ days; must be rehydrated (taking hours) before reading.', 'Seven-year compliance backups.'],
    ['Lifecycle management', 'Rules that move or delete blobs automatically based on age.', 'Move to cool after 30 days and archive after 180.']
  ],
  cosmos: [
    ['Azure Cosmos DB', 'Fully managed, globally distributed NoSQL database with single-digit-millisecond latency and up to 99.999% availability.', 'A global retail app or game.'],
    ['Account > database > container > item', 'The resource hierarchy. Containers hold items and are partitioned automatically.', 'An item is one JSON document.'],
    ['Partition key', 'The property that decides how items are spread across partitions. Choose one with many distinct values.', '/customerId'],
    ['Request unit (RU)', 'The normalised cost of an operation; throughput is RU/s. Reading a 1 KB item by ID costs about 1 RU.', 'Provision 400 RU/s.'],
    ['Provisioned vs serverless', 'Provisioned reserves RU/s (good for steady traffic, multi-region). Serverless bills per RU used (good for sporadic traffic, one region).', 'Serverless for a dev database.'],
    ['Global distribution', 'Add or remove regions with no downtime, and optionally write in every region.', 'Replicate to Europe and Asia.']
  ],
  cosmosApis: [
    ['API for NoSQL', 'Native document API for JSON with SQL-like queries; called the Core (SQL) API in older material.', 'SELECT * FROM c WHERE c.city = \'Dublin\''],
    ['API for MongoDB', 'Wire-compatible with MongoDB, so existing apps and drivers work.', 'Migrating a MongoDB app.'],
    ['API for Table', 'Key-value; compatible with Azure Table storage apps but adds global distribution and indexing.', 'Upgrading a Table storage app.'],
    ['API for Apache Gremlin', 'Graph database of vertices and edges.', 'Social networks, fraud rings.'],
    ['API for Apache Cassandra', 'Column-family, CQL-compatible.', 'IoT and time-series workloads.'],
    ['Terminology per API', 'Container = collection (MongoDB), table (Cassandra, Table), graph (Gremlin). Record = item, document, row, or node/edge.', 'A Cassandra keyspace is a Cosmos DB database.'],
    ['One API per account', 'The API is chosen when you create the account; use another account for another API.', 'Separate accounts for MongoDB and Gremlin.']
  ],
  consistency: [
    ['Strong', 'Reads always return the latest committed write. Highest latency.', 'Account balances.'],
    ['Bounded staleness', 'Reads may lag writes by at most K versions or T seconds.', 'Near-strong reads across regions.'],
    ['Session (default)', 'Within a client session you always read your own writes.', 'A user sees their own new post immediately.'],
    ['Consistent prefix', 'Reads never see writes out of order, but may be behind.', 'A, then A B, then A B C, never A C.'],
    ['Eventual', 'No ordering guarantee; replicas converge over time. Lowest latency.', 'Like counts on a post.']
  ],
  regions: [
    ['Region', 'A geographic area containing one or more datacenters, such as North Europe.', 'Choose by compliance, latency, service availability and price.'],
    ['Availability zone', 'A physically separate datacenter within a region, with independent power, cooling and networking.', 'Spread replicas across zones 1, 2 and 3.'],
    ['High availability vs disaster recovery', 'HA keeps you running through component or datacenter failures (zones); DR recovers from a regional outage (multiple regions).', 'Zones for HA, a paired region for DR.'],
    ['Resource hierarchy', 'Management group > subscription > resource group > resource.', 'A resource group for the DP-900 app.']
  ],
  cloudBenefits: [
    ['Elasticity', 'Resources scale up and down automatically with demand.', 'Extra servers on Friday evening.'],
    ['Agility', 'New resources are provisioned in minutes rather than weeks.', 'Spin up a test database for an hour.'],
    ['Economies of scale', 'Providers buy in huge volumes, which lowers the cost per unit.', 'Cheaper storage per GB.'],
    ['CapEx vs OpEx', 'CapEx = large upfront purchases (traditional datacenters). OpEx = pay-as-you-go running costs (cloud).', 'Renting VMs instead of buying servers.']
  ],
  analyticsTypes: [
    ['Descriptive', 'What happened?', 'Monthly sales report.'],
    ['Diagnostic', 'Why did it happen?', 'Root cause of a sales drop.'],
    ['Predictive', 'What is likely to happen?', 'Demand forecast with machine learning.'],
    ['Prescriptive', 'What should we do?', 'Recommended price per product.'],
    ['Cognitive', 'What can AI understand from the data?', 'Sentiment analysis, image recognition.']
  ],
  adf: [
    ['Pipeline', 'A logical group of activities that perform a task together.', 'Copy files, then run a notebook.'],
    ['Activity', 'One step in a pipeline: data movement, transformation or control flow.', 'Copy data, ForEach, Notebook.'],
    ['Linked service', 'The connection information for a data store or compute service.', 'The connection string to Azure SQL.'],
    ['Dataset', 'A named reference to specific data within a linked service.', 'The Sales table, or a folder of CSV files.'],
    ['Integration runtime', 'The compute that runs activities. Self-hosted for on-premises sources.', 'A self-hosted IR to reach on-premises SQL Server.'],
    ['Trigger', 'Starts pipeline runs on a schedule or when an event happens.', 'Every night at 2 AM, or when a file arrives.']
  ],
  purview: [
    ['Metadata', 'Data about data: names, types, owners, descriptions.', 'Column names and data types of a table.'],
    ['Data catalog', 'A searchable inventory of data assets so people can discover them.', 'Search "customer" across all sources.'],
    ['Classification', 'Automatically labelling sensitive data.', 'Finding credit card numbers or national IDs.'],
    ['Lineage', 'Where data came from and how it moved and changed.', 'SQL table → pipeline → Power BI report.']
  ]
};

window.DP900.tips = [
  { re: 'consistency level|bounded staleness|consistent prefix', sk: ['3.4', 'D'], defs: ['consistency'],
    tip: 'Cosmos DB consistency, strongest to weakest: Strong · Bounded staleness · Session (the default) · Consistent prefix · Eventual.' },
  { re: 'cosmos db.*\\bAPI\\b|API for (NoSQL|MongoDB|Table|Apache)|\\bkeyspace\\b', sk: ['3.3', '3.4', '3.5', '1.3', '1.4', 'X', 'D'], defs: ['cosmosApis'],
    tip: 'Documents → API for NoSQL (called the Core (SQL) API in older course material) or API for MongoDB · Relationships → Gremlin · Key-value → Table · Column-family, IoT and time series → Cassandra. Each API needs its own Cosmos DB account.' },
  { re: '\\b(LRS|ZRS|GRS|GZRS|RA-GRS)\\b|redundan', sk: ['3.1', 'D', 'X'], defs: ['redundancy'],
    tip: 'LRS = Local (3 copies, 1 datacenter) · ZRS = Zones (3 copies across 3 zones) · GRS = Geo (LRS + a secondary region, 6 copies) · GZRS = Geo + Zones (most resilient, most expensive).' },
  { re: 'access tier|\\b(hot|cool|cold|archive) tier|rehydrat', sk: ['3.1', 'D'], defs: ['tiers'],
    tip: 'Hot = frequent access · Cool = infrequent, 30+ days · Cold = rare, 90+ days · Archive = offline and cheapest, 180+ days, hours to rehydrate.' },
  { re: '\\b(DDL|DML|DCL|DQL|TCL)\\b|\\bGRANT\\b|category of SQL|statement category|its category', sk: ['2.3'], defs: ['sqlCategories'],
    tip: 'DDL defines (CREATE, ALTER, DROP) · DQL queries (SELECT) · DML modifies (INSERT, UPDATE, DELETE) · DCL controls access (GRANT, REVOKE) · TCL manages transactions (COMMIT, ROLLBACK).' },
  { re: 'ACID|atomicity|durability|\\bisolation\\b|COMMIT|ROLLBACK|transfer', sk: ['1.5', '2.3'], defs: ['acid'],
    tip: 'ACID: Atomicity = all or nothing · Consistency = valid before and after · Isolation = transactions don\'t interfere · Durability = committed changes survive a crash.' },
  { re: 'descriptive|diagnostic|predictive|prescriptive|cognitive|type of analytics', sk: ['X'], defs: ['analyticsTypes'],
    tip: 'Descriptive: what happened? · Diagnostic: why did it happen? · Predictive: what will happen? · Prescriptive: what should we do? · Cognitive: what can AI understand?' },
  { re: 'big data|volume.*velocity|velocity.*variety', sk: ['4.1'], defs: ['bigData'],
    tip: 'Big data = Volume (how much) + Velocity (how fast) + Variety (how many formats).' },
  { re: 'availability zone|azure region|\\bregions?\\b.*(outage|fail|latency|compliance)|resource group|management group',
    sk: ['X'], defs: ['regions'],
    tip: 'Availability zones = survive a datacenter failure within a region · Multiple regions = survive a whole-region outage and reach global users · Hierarchy: management group > subscription > resource group > resource.' },
  { re: 'elasticity|agility|economies of scale|CapEx|OpEx|capital expenditure|spending', defs: ['cloudBenefits'],
    tip: 'Elasticity = scale on demand · Agility = provision in minutes · Economies of scale = lower unit cost · CapEx = buy upfront · OpEx = pay as you go (the cloud model).' },
  { re: '\\bIaaS\\b|\\bPaaS\\b|\\bSaaS\\b|service model|shared responsibility|patch', sk: ['2.5', '2.6', 'X', 'D'], defs: ['serviceModels'],
    tip: 'IaaS: "I get a VM and manage it" (SQL Server on a VM) · PaaS: "Microsoft runs the platform, I manage the data" (Azure SQL Database, Cosmos DB) · SaaS: "just use the software" (Microsoft 365, Fabric). Your data is always your responsibility.' },
  { sk: ['2.5'], defs: ['azureSql'],
    tip: 'New cloud app with a managed SQL database → Azure SQL Database · Migrating SQL Server with minimal changes (Agent, Database Mail, cross-database queries) → SQL Managed Instance · Full OS and instance control → SQL Server on an Azure VM.' },
  { sk: ['2.6'], defs: ['openSource'],
    tip: 'Open-source engines as PaaS: Azure Database for MySQL (LAMP stack, WordPress) and Azure Database for PostgreSQL (extensible, PostGIS). Azure Database for MariaDB was retired in 2025.' },
  { re: 'disk|queue', sk: ['X', 'D', '3.1', '3.2', '3.3', '1.3', '1.4'], defs: ['storageServices'],
    tip: 'Blob = objects (images, video, backups) · Files = shared folders (SMB/NFS) · Disks = VM hard drives · Queues = messages between apps · Tables = NoSQL key-value.' },
  { sk: ['3.1', '3.2', '3.3'], defs: ['storageServices'],
    tip: 'Blob = objects (images, video, backups) · Files = shared folders (SMB/NFS) · Disks = VM hard drives · Queues = messages · Tables = NoSQL key-value. Blobs, Files, Queues and Tables all live in a storage account.' },
  { sk: ['3.4', '3.5'], defs: ['cosmos'],
    tip: 'Flexible schema, JSON, global distribution, single-digit-millisecond latency or massive scale → think Azure Cosmos DB. Hierarchy: account > database > container > item.' },
  { sk: ['1.1'], defs: ['dataTypes'],
    tip: 'Structured = tables with a fixed schema (SQL) · Semi-structured = JSON or XML with flexible fields (Cosmos DB) · Unstructured = files such as images, video and PDFs (Blob Storage).' },
  { sk: ['1.2'], defs: ['fileFormats'],
    tip: 'Parquet and ORC = columnar, for analytics · Avro = row-based binary, for streaming · CSV, JSON and XML = human-readable text.' },
  { re: 'star schema|snowflake schema|fact table|dimension table|\\bfacts?\\b.*\\bdimension|\\bfact in\\b', sk: ['1.6', '4.7'], defs: ['starSchema'],
    tip: 'Fact = numbers (measures such as SalesAmount) · Dimension = descriptions (who, what, when, where).' },
  { re: 'data lake|data warehouse|lakehouse|schema-on|data mart', sk: ['1.3', '1.4', '1.6', '4.2'], defs: ['lakeWarehouse'],
    tip: 'Warehouse = refined data, schema on write · Lake = raw data, schema on read · Lakehouse = both, using Delta tables.' },
  { sk: ['1.5', '1.6'], defs: ['oltpOlap'],
    tip: 'OLTP = many small transactions, normalized tables, row storage, current data · OLAP = large aggregations, denormalized tables, columnar storage, historical data.' },
  { sk: ['1.7'], defs: ['roles'],
    tip: 'Database administrator = runs the databases (backups, security, performance) · Data engineer = builds pipelines and data stores · Data analyst = builds models, reports and dashboards.' },
  { sk: ['1.3', '1.4'], defs: ['dataStores'],
    tip: 'The course\'s memory trick: Transactions → Azure SQL · Analysis → Synapse or Fabric · Documents → Cosmos DB · Files → Blob Storage.' },
  { sk: ['2.2'], defs: ['normalization'],
    tip: 'Normalization = less redundancy + better integrity. 1NF: atomic values · 2NF: no partial dependencies · 3NF: no columns that depend on anything but the key.' },
  { sk: ['2.4'], defs: ['dbObjects'],
    tip: 'Index = faster reads (one clustered index per table, many non-clustered, and a primary key creates one automatically) · View = virtual table defined by a query · Stored procedure = reusable named SQL.' },
  { sk: ['2.1'], defs: ['keys'],
    tip: 'Primary key = unique and never NULL, one per table · Foreign key = links to another table and prevents orphaned rows.' },
  { sk: ['2.3'], defs: ['sqlClauses'],
    tip: 'Filter rows with WHERE · group with GROUP BY · filter groups with HAVING · sort with ORDER BY · combine tables with JOIN.' },
  { re: '\\bETL\\b|\\bELT\\b|transforming it there', sk: ['4.1'], defs: ['etl'],
    tip: 'ETL = transform before loading · ELT = load first, then transform in the target (favoured in the cloud because compute scales).' },
  { sk: ['4.4'], defs: ['batchStream'],
    tip: 'Need results immediately → stream processing · Fine to wait for a nightly or scheduled run → batch processing.' },
  { sk: ['4.5'], defs: ['realtime'],
    tip: 'Ingest events with Event Hubs (or IoT Hub for devices, Kafka for open source) · process with Stream Analytics, Spark Structured Streaming or Fabric Real-Time Intelligence · store and query in an eventhouse with KQL.' },
  { sk: ['4.3'], defs: ['analyticsServices'],
    tip: 'Fabric = all-in-one SaaS on OneLake · Databricks = managed Spark · Synapse = SQL pools + Spark + pipelines (formerly SQL Data Warehouse) · HDInsight = open-source clusters (Hadoop, Spark, Kafka, HBase).' },
  { sk: ['4.1'], defs: ['lifecycle'],
    tip: 'Analytics lifecycle: ingest → process → store → analyze → visualize. Data Factory moves and orchestrates data; Spark (Databricks, Synapse, Fabric) transforms it.' },
  { sk: ['4.2'], defs: ['lakeWarehouse', 'mpp'],
    tip: 'Analytical stores: data lake = raw files · data warehouse = curated relational tables · lakehouse = files plus Delta tables. MPP spreads queries across many nodes.' },
  { sk: ['4.6'], defs: ['powerbi'],
    tip: 'Power BI flow: build in Desktop → publish to the service → share through workspaces, apps and mobile. Reports have many pages; dashboards are one page of pinned tiles.' },
  { sk: ['4.7'], defs: ['pbiModel'],
    tip: 'Power Query shapes data (M) · DAX calculates (measures at query time, calculated columns per row) · relationships let filters flow from dimension tables to fact tables.' },
  { sk: ['4.8'], defs: ['visuals'],
    tip: 'Trend over time → line · compare categories → bar or column · part of a whole → pie or donut · one number → card · two measures → scatter · geography → map.' },
  { sk: ['D', 'X'], re: 'SQL|MySQL|PostgreSQL|Hyperscale|DTU|vCore', defs: ['azureSql'],
    tip: 'New cloud app with a managed SQL database → Azure SQL Database · Migrating SQL Server with minimal changes → SQL Managed Instance · Full OS and instance control → SQL Server on an Azure VM. Details such as tiers and features are less likely on DP-900.' },
  { sk: ['D', 'X'], re: 'Cosmos|partition', defs: ['cosmos'],
    tip: 'Flexible schema, JSON, global distribution, single-digit-millisecond latency or massive scale → think Azure Cosmos DB. Hierarchy: account > database > container > item.' },
  { sk: ['D', 'X'], re: 'Stream Analytics|Event Hubs|KQL|Kusto|HDInsight|window', defs: ['realtime', 'batchStream'],
    tip: 'Ingest events with Event Hubs (or IoT Hub for devices, Kafka for open source) · process with Stream Analytics, Spark Structured Streaming or Fabric Real-Time Intelligence · store and query in an eventhouse with KQL.' },
  { sk: ['D', 'X'], re: 'Data Factory|integration runtime|pipeline|activity', defs: ['adf'],
    tip: 'Data Factory building blocks: pipelines group activities · linked services hold connections · datasets point to data · integration runtimes provide compute · triggers start runs.' },
  { sk: ['D', 'X'], re: 'storage|blob|Data Box|AzCopy|website|physically ship', defs: ['storageServices'],
    tip: 'Blob = objects (images, video, backups) · Files = shared folders (SMB/NFS) · Disks = VM hard drives · Queues = messages · Tables = NoSQL key-value.' },
  { sk: ['X'], re: 'metadata|data about data|Purview|lineage|classif|personally identifiable', defs: ['purview'],
    tip: 'Data governance in Microsoft Purview: catalog (discover data), classification (find sensitive data such as PII) and lineage (where data came from and how it changed).' }
];
