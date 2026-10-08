/* Domain 4: Describe an analytics workload on Azure (25–30%) */
DP900.add(4, 'ana-', [
  {
    q: "Which Azure service is a cloud-based data integration service used to create, schedule and orchestrate ETL and ELT pipelines?",
    o: ["Azure Data Factory", "Azure Stream Analytics", "Power BI", "Azure Cosmos DB"],
    a: [0],
    e: "Azure Data Factory orchestrates data movement and transformation through pipelines, with 90+ connectors, mapping data flows and scheduling triggers. Stream Analytics processes real-time streams, Power BI visualises data, and Cosmos DB is a database."
  },
  {
    q: "In Azure Data Factory, what is a pipeline?",
    o: ["A logical grouping of activities that together perform a task", "The connection information that Data Factory uses to reach a data store", "The compute environment that runs activities, either in Azure or on-premises", "A named reference to a specific table, file or folder used as input or output"],
    a: [0],
    e: "A pipeline groups activities, such as copying data and running transformations, into a unit that can be scheduled and monitored. Connection information is held in linked services."
  },
  {
    q: "In Azure Data Factory, what defines the connection information needed to connect to an external data store or compute service?",
    o: ["Linked service", "Dataset", "Integration runtime", "Trigger"],
    a: [0],
    e: "A linked service is like a connection string: it defines how to connect to a resource such as a storage account or SQL database. A dataset describes the data structure within that store (such as a table or file), an activity is a processing step, and a trigger starts pipelines."
  },
  {
    q: "In Azure Data Factory, which component represents a named view of data, such as a specific table or folder of files, that activities use as input or output?",
    o: ["Dataset", "Linked service", "Integration runtime", "Pipeline"],
    a: [0],
    e: "Datasets point to the data you want to use within a linked service, such as a particular table, file or folder, and can define schema and format."
  },
  {
    q: "Which Azure Data Factory component provides the compute infrastructure used to run activities, including connecting to on-premises data sources?",
    o: ["Integration runtime", "Linked service", "Dataset", "Trigger"],
    a: [0],
    e: "The integration runtime (IR) is the compute environment for Data Factory. The Azure IR runs in the cloud, the self-hosted IR is installed on-premises or in a private network to reach local data, and the Azure-SSIS IR runs SSIS packages."
  },
  {
    q: "You need Azure Data Factory to copy data from a SQL Server database in your on-premises datacenter. What must you install?",
    o: ["A self-hosted integration runtime", "Azure Data Box", "Power BI Desktop", "An Azure-SSIS integration runtime in the cloud only"],
    a: [0],
    e: "A self-hosted integration runtime installed on a machine inside the private network can securely reach on-premises sources and move data to Azure without opening inbound firewall ports."
  },
  {
    q: "Which Azure Data Factory component determines when a pipeline run starts, for example every day at 2 AM or when a file arrives in storage?",
    o: ["Trigger", "Activity", "Dataset", "Linked service"],
    a: [0],
    e: "Triggers start pipeline runs. Types include schedule triggers, tumbling window triggers and event-based triggers (for example, when a blob is created)."
  },
  {
    q: "Which Azure Data Factory feature lets you design data transformations visually, without writing code, and runs them on managed Spark clusters?",
    o: ["Mapping data flows", "Linked services", "Integration runtime", "Self-hosted gateway"],
    a: [0],
    e: "Mapping data flows provide a visual designer for transformations (joins, aggregations, derived columns), which Data Factory executes at scale on managed Spark clusters."
  },
  {
    q: "What is Azure Synapse Analytics?",
    o: ["An analytics service that combines SQL data warehousing, Spark and data integration pipelines", "A globally distributed NoSQL database for IoT and web applications with multiple APIs", "A managed service for open-source Hadoop, Kafka and HBase clusters on virtual machines", "A business intelligence service for building interactive reports and dashboards"],
    a: [0],
    e: "Azure Synapse Analytics combines SQL-based data warehousing (dedicated and serverless SQL pools), Apache Spark pools, and Data Factory-style pipelines in a single workspace with Synapse Studio. Microsoft now positions Microsoft Fabric as the evolution of these capabilities."
  },
  {
    q: "Which Azure Synapse Analytics component provides a provisioned, massively parallel processing (MPP) relational data warehouse?",
    o: ["Dedicated SQL pool", "Serverless SQL pool", "Apache Spark pool", "Synapse pipelines"],
    a: [0],
    e: "Dedicated SQL pools (formerly SQL Data Warehouse) provision compute measured in DWUs and distribute data across 60 distributions for MPP query processing. You pay for provisioned capacity while it runs."
  },
  {
    q: "Which Azure Synapse Analytics component lets you query files such as Parquet and CSV in a data lake using T-SQL, paying only for the data processed by each query?",
    o: ["Serverless SQL pool", "Dedicated SQL pool", "Apache Spark pool", "Integration runtime"],
    a: [0],
    e: "The built-in serverless SQL pool queries data in place in the data lake using T-SQL (for example OPENROWSET). There's no infrastructure to provision, and billing is per TB of data processed."
  },
  {
    q: "Which TWO languages can data engineers use in Apache Spark notebooks in Azure Synapse Analytics, Azure Databricks or Microsoft Fabric? (Choose two.)",
    o: ["Python (PySpark)", "Scala", "DAX", "KQL", "M"],
    a: [0, 1],
    e: "Spark notebooks support Python (PySpark), Scala, Spark SQL and R. DAX is the Power BI modelling language, and KQL is the Kusto query language for Azure Data Explorer and Fabric Real-Time Intelligence. M is the Power Query formula language."
  },
  {
    q: "What is Apache Spark?",
    o: ["An open-source engine for distributed, in-memory processing of large datasets", "A Microsoft relational database engine optimised for transactional workloads", "An open-source message broker that streams events between applications", "A columnar file format designed for storing analytical data in a data lake"],
    a: [0],
    e: "Apache Spark is a parallel processing framework that runs work across a cluster, keeping data in memory where possible. It supports batch and stream processing, SQL and machine learning, and is available in Azure Databricks, Synapse, HDInsight and Fabric."
  },
  {
    q: "Which Azure service is a Spark-based analytics platform built by the creators of Apache Spark, offering collaborative notebooks and Delta Lake?",
    o: ["Azure Databricks", "Azure Data Factory", "Azure Stream Analytics", "Azure SQL Database"],
    a: [0],
    e: "Azure Databricks is a first-party Azure service based on the Databricks platform. It provides optimised Spark runtimes, collaborative notebooks, Delta Lake and Unity Catalog, and is used for data engineering, data science and machine learning."
  },
  {
    q: "Which Azure service provides managed open-source analytics clusters such as Apache Hadoop, Spark, Kafka and HBase?",
    o: ["Azure HDInsight", "Azure Data Factory", "Power BI", "Azure Purview"],
    a: [0],
    e: "Azure HDInsight is a managed service for open-source frameworks including Hadoop, Spark, Kafka, HBase and Interactive Query (Hive LLAP). It suits organisations that need these specific open-source components."
  },
  {
    q: "What is Delta Lake?",
    o: ["An open-source layer that adds ACID transactions and time travel to Parquet files", "A managed relational database service that stores its tables in Azure Data Lake", "An open-source columnar file format that replaces Parquet for analytical workloads", "An Azure Storage redundancy option that replicates data lake files across regions"],
    a: [0],
    e: "Delta Lake stores data as Parquet files with a transaction log, enabling ACID transactions, updates and deletes, schema enforcement and querying previous versions (time travel). It is the default table format in Microsoft Fabric and Databricks."
  },
  {
    q: "What is Microsoft Fabric?",
    o: ["A SaaS analytics platform that unifies data engineering, warehousing, real-time and BI on OneLake", "A globally distributed NoSQL database for operational applications that need low latency", "A virtual network service that connects on-premises data sources to Azure analytics services", "A storage account type that replaces Blob Storage for virtual machine disks and file shares"],
    a: [0],
    e: "Microsoft Fabric is a software-as-a-service analytics platform. All workloads (Data Factory, Data Engineering, Data Warehouse, Data Science, Real-Time Intelligence, Databases and Power BI) share one data lake, OneLake, and one capacity-based licensing model."
  },
  {
    q: "What is OneLake in Microsoft Fabric?",
    o: ["A single logical data lake for the whole organisation, provided with every Fabric tenant", "A separate Azure Storage account that each Fabric user must create and manage themselves", "A Power BI feature that caches semantic models in memory for faster report rendering", "A relational database engine in Fabric that stores tables in a proprietary row format"],
    a: [0],
    e: "OneLake is Fabric's built-in data lake, often described as 'OneDrive for data'. It is built on Azure Data Lake Storage Gen2, stores tables in Delta Parquet format, and is shared by every Fabric workload, which avoids copying data between engines."
  },
  {
    q: "In Microsoft Fabric, which feature lets you reference data stored in other locations, such as ADLS Gen2 or Amazon S3, from OneLake without copying it?",
    o: ["Shortcuts", "Mirroring", "Dataflows", "Deployment pipelines"],
    a: [0],
    e: "OneLake shortcuts are virtual pointers to data in other OneLake locations or external stores like ADLS Gen2, Amazon S3 or Google Cloud Storage. Data appears in OneLake without being moved or duplicated."
  },
  {
    q: "Which Microsoft Fabric feature continuously replicates data from operational databases such as Azure SQL Database, Azure Cosmos DB or Snowflake into OneLake in near real time?",
    o: ["Mirroring", "Shortcuts", "Power BI apps", "Notebooks"],
    a: [0],
    e: "Mirroring creates a continuously synchronised, read-only replica of a source database in OneLake as Delta tables, so data is ready for analytics without building ETL pipelines."
  },
  {
    q: "Which Microsoft Fabric item stores both files and Delta tables, can be explored with Spark notebooks, and automatically exposes a SQL analytics endpoint for read-only T-SQL queries?",
    o: ["Lakehouse", "Warehouse", "Eventhouse", "Semantic model"],
    a: [0],
    e: "A Fabric lakehouse combines data lake files with Delta tables. It is managed mainly with Spark, and each lakehouse gets an automatically generated SQL analytics endpoint for read-only T-SQL querying."
  },
  {
    q: "Which Microsoft Fabric item provides a fully transactional relational data warehouse that supports T-SQL inserts, updates and deletes, with data stored in Delta format in OneLake?",
    o: ["Warehouse", "Lakehouse SQL analytics endpoint", "Eventstream", "KQL queryset"],
    a: [0],
    e: "Fabric Warehouse is a SQL-first data warehouse with full T-SQL DML and multi-table transactions. Data is stored in OneLake as Delta tables. The lakehouse SQL analytics endpoint is read-only."
  },
  {
    q: "What is the medallion architecture commonly used in lakehouses?",
    o: ["Organising data into bronze (raw), silver (cleansed) and gold (business-ready) layers", "Storing three copies of the data in different Azure regions for durability", "Grouping reports into bronze, silver and gold tiers by how often they are used", "Granting gold, silver and bronze permission levels to different groups of users"],
    a: [0],
    e: "The medallion architecture progressively improves data quality: bronze holds raw ingested data, silver holds validated and conformed data, and gold holds aggregated, business-level tables ready for reporting."
  },
  {
    q: "How is Microsoft Fabric licensed and paid for?",
    o: ["By buying capacity (F SKUs measured in capacity units) shared by all workloads", "By paying separately for the virtual machines that run each Fabric workload", "By provisioning request units per second for each lakehouse and warehouse", "By choosing a DTU level for each workspace, with Power BI billed separately"],
    a: [0],
    e: "Fabric uses capacities (F SKUs) measured in capacity units (CUs). All workloads consume from the same capacity. Power BI Pro or Premium Per User licences may still be needed to share content, depending on capacity size."
  },
  {
    q: "Which TWO statements describe a data warehouse compared with a data lake? (Choose two.)",
    o: ["A data warehouse stores data in a relational schema optimised for querying", "A data warehouse usually holds cleaned, structured data", "A data warehouse stores raw files in any format", "A data warehouse cannot be queried with SQL", "A data warehouse is optimised for high-volume single-row transactional writes"],
    a: [0, 1],
    e: "Data warehouses hold structured, cleansed data in relational schemas (often star schemas) and are queried with SQL. Raw files in any format describe a data lake. High-volume single-row writes describe an OLTP database."
  },
  {
    q: "Which Azure service is a fully managed, real-time analytics engine that uses SQL-like queries to process streaming data from sources like Event Hubs and IoT Hub?",
    o: ["Azure Stream Analytics", "Azure Data Factory", "Azure Synapse dedicated SQL pool", "Azure Files"],
    a: [0],
    e: "Azure Stream Analytics runs continuous queries, written in a SQL-like language, over streaming input and sends results to outputs such as Power BI, Azure SQL, Blob Storage or Cosmos DB."
  },
  {
    q: "Besides its query, which two components must every Azure Stream Analytics job define? (Choose two.)",
    o: ["Input", "Output", "Linked service", "Integration runtime", "Apache Spark pool"],
    a: [0, 1],
    e: "A Stream Analytics job reads from one or more inputs (such as Event Hubs, IoT Hub or Blob Storage), transforms the data with a SQL-like query, and writes to one or more outputs. Linked services and integration runtimes are Data Factory concepts, and Stream Analytics does not use Spark pools."
  },
  {
    q: "Which Azure service is a big data streaming platform and event ingestion service that can receive millions of events per second?",
    o: ["Azure Event Hubs", "Azure Queue storage", "Azure SQL Database", "Power BI"],
    a: [0],
    e: "Azure Event Hubs is a highly scalable event ingestion service with Apache Kafka compatibility. It is often the front door for streaming pipelines feeding Stream Analytics, Spark or Fabric eventstreams."
  },
  {
    q: "Which Azure service is designed specifically to ingest telemetry from IoT devices and also supports bi-directional communication to send commands to those devices?",
    o: ["Azure IoT Hub", "Azure Event Hubs", "Azure Data Factory", "Azure Blob Storage"],
    a: [0],
    e: "Azure IoT Hub provides per-device identity, device management and cloud-to-device messaging in addition to high-volume telemetry ingestion. Event Hubs is a general event ingestion service without device management."
  },
  {
    q: "In Azure Stream Analytics, which type of window divides time into fixed-size, non-overlapping, contiguous intervals, for example counting events every 10 seconds?",
    o: ["Tumbling window", "Hopping window", "Sliding window", "Session window"],
    a: [0],
    e: "Tumbling windows are fixed-length, back-to-back intervals, and each event belongs to exactly one window. Hopping windows overlap, sliding windows emit when events enter or leave, and session windows group events separated by gaps of inactivity."
  },
  {
    q: "Which Azure Stream Analytics window type has a fixed size but moves forward by a smaller 'hop', so windows overlap and an event can belong to more than one window?",
    o: ["Hopping window", "Tumbling window", "Session window", "Snapshot window"],
    a: [0],
    e: "A hopping window is defined by window size and hop size, for example a 10-second window every 5 seconds. Because the hop is smaller than the size, windows overlap."
  },
  {
    q: "Which Stream Analytics window groups events that arrive close together and closes after a period with no new events (a timeout)?",
    o: ["Session window", "Tumbling window", "Hopping window", "Snapshot window"],
    a: [0],
    e: "Session windows group events that occur near each other in time, ending when no events arrive for a specified timeout (or a maximum duration is reached). They're useful for grouping user activity sessions."
  },
  {
    q: "Which Azure service is optimised for fast, interactive analysis of large volumes of log and telemetry data using the Kusto Query Language (KQL)?",
    o: ["Azure Data Explorer", "Azure SQL Database", "Azure Files", "Azure Database for MySQL"],
    a: [0],
    e: "Azure Data Explorer is a fast, fully managed analytics service for log, time-series and telemetry data, queried with KQL. The same engine powers eventhouses and KQL databases in Microsoft Fabric Real-Time Intelligence."
  },
  {
    q: "In Microsoft Fabric, which workload is designed for ingesting, transforming, storing and querying streaming event data in real time?",
    o: ["Real-Time Intelligence", "Data Warehouse", "Power BI apps", "Data Factory dataflows"],
    a: [0],
    e: "Fabric Real-Time Intelligence includes eventstreams (to capture and route streaming events), eventhouses with KQL databases (to store and query them), Real-Time Dashboards and Activator (to trigger actions)."
  },
  {
    q: "Which Microsoft Fabric item captures real-time events from sources such as Azure Event Hubs, transforms them without code and routes them to destinations like a lakehouse or eventhouse?",
    o: ["Eventstream", "Semantic model", "Warehouse", "Dataflow Gen2"],
    a: [0],
    e: "Eventstreams provide a no-code experience to connect to streaming sources, apply transformations and send events to multiple destinations in Fabric."
  },
  {
    q: "Which language is used to query data in a KQL database in an eventhouse in Microsoft Fabric?",
    o: ["KQL", "DAX", "MDX", "T-SQL"],
    a: [0],
    e: "KQL is a read-optimised query language that uses a pipe (|) syntax, for example `Telemetry | where Temp > 30 | summarize count() by DeviceId`. T-SQL is also partially supported for KQL databases."
  },
  {
    q: "Which Microsoft Fabric feature monitors data and automatically triggers actions, such as sending an email or Teams message, when specified conditions are met?",
    o: ["Activator", "Shortcuts", "Mirroring", "Semantic link"],
    a: [0],
    e: "Fabric Activator (part of Real-Time Intelligence) is a no-code tool that watches streaming or report data and takes actions, such as alerts or Power Automate flows, when patterns or thresholds are detected."
  },
  {
    q: "Which Azure services can be used for real-time stream processing? (Choose two.)",
    o: ["Azure Stream Analytics", "Spark Structured Streaming in Azure Databricks", "Azure Data Box", "Azure Files", "Scheduled Azure Data Factory copy pipelines"],
    a: [0, 1],
    e: "Stream Analytics and Spark Structured Streaming (in Databricks, Synapse or Fabric) both process data streams continuously. Data Box is offline data transfer, and Azure Files provides file shares. Scheduled Data Factory pipelines are batch processing."
  },
  {
    q: "Which describes the purpose of Power BI?",
    o: ["A set of services, apps and connectors that turn data into interactive visual insights", "A NoSQL database service that stores semi-structured data for business applications", "A data integration service that copies and transforms data between many data stores", "A machine learning platform for training, deploying and monitoring predictive models"],
    a: [0],
    e: "Power BI includes Power BI Desktop, the Power BI service, mobile apps and many connectors, for connecting to data, modelling it and building interactive reports and dashboards to share."
  },
  {
    q: "Which Power BI component is a free Windows application used to connect to data, transform it, build data models and create reports?",
    o: ["Power BI Desktop", "Power BI service", "Power BI mobile app", "Power BI Report Server"],
    a: [0],
    e: "Report authors typically build in Power BI Desktop, then publish to the Power BI service (app.powerbi.com) to share and collaborate. Mobile apps are for consuming content."
  },
  {
    q: "What is the typical Power BI workflow?",
    o: ["Build in Power BI Desktop, publish to the Power BI service, then share and view on web and mobile", "Build reports on a phone in the mobile app, then export them to Excel to share them by email", "Create dashboards in Azure Data Factory, then import them into Power BI Desktop for editing", "Write DAX queries in SQL Server Management Studio, then publish the results as a report"],
    a: [0],
    e: "The common flow is: connect to and model data in Desktop, publish to a workspace in the Power BI service, then pin visuals to dashboards and share reports or apps with users on the web and mobile."
  },
  {
    q: "What is the difference between a Power BI report and a Power BI dashboard?",
    o: ["A report has pages of interactive visuals from one model; a dashboard is one page of pinned tiles", "A dashboard can have many pages from one model; a report is one page of tiles from many reports", "Reports can only be viewed on mobile devices; dashboards can only be viewed in a web browser", "Reports are created in the Power BI service; dashboards can only be created in Power BI Desktop"],
    a: [0],
    e: "Reports are multi-page, highly interactive and based on a single semantic model. Dashboards (created only in the Power BI service) are single-page summaries with tiles that can be pinned from multiple reports and models."
  },
  {
    q: "In Power BI, which tool is used to connect to data sources and clean, shape and transform data before it's loaded into the model?",
    o: ["Power Query", "DAX", "Q&A", "Power BI Report Builder"],
    a: [0],
    e: "Power Query (the Power Query Editor) provides a graphical interface for transformations such as removing columns, changing data types, merging and appending queries. Its underlying language is M. DAX is used for calculations in the model."
  },
  {
    q: "Which formula language is used to create calculated columns and measures in a Power BI semantic model?",
    o: ["DAX", "M", "KQL", "T-SQL"],
    a: [0],
    e: "DAX is the formula language for Power BI, Analysis Services and Power Pivot. It is used for measures like `Total Sales = SUM(Sales[Amount])`, calculated columns and calculated tables. M is the Power Query language."
  },
  {
    q: "In Power BI, what is a measure?",
    o: ["A calculation, such as a sum, evaluated at query time in the current filter context", "A column that is imported directly from the data source without any changes", "A calculation that is computed once per row during refresh and stored in the table", "A connection to a data source that defines how often the data is refreshed"],
    a: [0],
    e: "Measures are DAX calculations evaluated dynamically depending on filters and slicers in a visual, so the same 'Total Sales' measure shows different values by region, product or year."
  },
  {
    q: "In a Power BI data model, what is the purpose of a relationship between tables?",
    o: ["It lets filters on one table, such as Product, flow to related tables, such as Sales", "It encrypts the data in related tables so that only authorised users can read it", "It defines how often each table in the model is refreshed from its data source", "It merges the related tables into one table during refresh to remove duplicate rows"],
    a: [0],
    e: "Relationships (usually one-to-many between a dimension and a fact table) let slicing by attributes in one table filter values in another. That is how a star schema works in Power BI."
  },
  {
    q: "Which Power BI modelling feature lets users drill down from Year to Quarter to Month to Day in a visual?",
    o: ["Hierarchy", "Measure", "Relationship", "Row-level security"],
    a: [0],
    e: "Hierarchies group attributes in levels, enabling drill-down and drill-up in visuals. Date hierarchies (Year > Quarter > Month > Day) are the most common example."
  },
  {
    q: "What is a Power BI semantic model (formerly called a dataset)?",
    o: ["The data model, with tables, relationships and measures, that reports are built on", "A single chart that has been saved so it can be reused across several reports", "A tile pinned to a Power BI dashboard from a report or a Q&A question", "A pixel-perfect report designed to be printed or exported across many pages"],
    a: [0],
    e: "A semantic model contains imported or connected data, relationships, measures, hierarchies and formatting. Multiple reports can share the same semantic model, which promotes a single version of the truth."
  },
  {
    q: "Which visual is MOST appropriate to show how sales have changed over the last 24 months?",
    o: ["Line chart", "Pie chart", "Card", "Table"],
    a: [0],
    e: "Line charts are ideal for showing trends over a continuous time axis. Pie charts show parts of a whole, cards display a single value, and tables show detailed values."
  },
  {
    q: "Which visual is MOST appropriate to compare total sales across ten product categories?",
    o: ["Bar chart", "Line chart", "Card", "Gauge"],
    a: [0],
    e: "Bar and column charts make it easy to compare values across categories. A line chart implies continuity (best for time), and cards and gauges show single values."
  },
  {
    q: "Which Power BI visual displays a single key figure, such as Total Revenue, in large text?",
    o: ["Card", "Matrix", "Scatter chart", "Treemap"],
    a: [0],
    e: "Card visuals show a single value (or a few values with the multi-row card) prominently. They are often used for KPIs at the top of a report."
  },
  {
    q: "Which visual should you use to show the relationship between two numeric values, such as advertising spend and sales, for many products?",
    o: ["Scatter chart", "Pie chart", "Card", "Slicer"],
    a: [0],
    e: "Scatter charts plot items by two numeric axes to show correlation, clusters and outliers. A bubble size can add a third measure."
  },
  {
    q: "Which visual shows data in a grid with rows and columns that can be grouped and expanded, similar to a PivotTable?",
    o: ["Matrix", "Card", "Line chart", "Funnel"],
    a: [0],
    e: "A matrix groups data by row and column fields with subtotals and drill-down, like an Excel PivotTable. A table visual shows flat rows without column grouping."
  },
  {
    q: "Which Power BI element lets report users filter all visuals on a page by choosing values such as a year or region?",
    o: ["Slicer", "Card", "Gauge", "Tooltip"],
    a: [0],
    e: "Slicers are on-canvas filters that users can interact with to filter other visuals on the page (and optionally other pages through sync slicers)."
  },
  {
    q: "Which visual is best for showing how a value compares to a target, for example progress towards a sales goal?",
    o: ["KPI visual", "Scatter chart", "Filled map", "Matrix"],
    a: [0],
    e: "Gauges show a value on a circular scale with an optional target, and KPI visuals show a value, its target and trend. Both are designed for goal tracking."
  },
  {
    q: "Which visual is most appropriate to show sales by country on a geographic map?",
    o: ["Filled map", "Line chart", "Card", "Waterfall chart"],
    a: [0],
    e: "Map visuals plot data by location, and filled maps shade regions by value. They make geographic patterns easy to spot."
  },
  {
    q: "Which TWO are features of Power BI reports? (Choose two.)",
    o: ["Interactive visuals that cross-filter each other", "Multiple pages", "Visuals write changes back to the source database by default", "They refresh their data automatically every second by default", "Tiles pinned from several different reports on one canvas"],
    a: [0, 1],
    e: "Reports can have many pages, and selecting a data point in one visual cross-filters or cross-highlights others. Reports are read-only analytics by default, data refreshes on a schedule (or live with DirectQuery), and tiles pinned from several reports describe a dashboard."
  },
  {
    q: "Which Power BI feature lets users ask questions about their data in natural language, such as 'total sales by region last year'?",
    o: ["Q&A", "Power Query", "Row-level security", "Drillthrough"],
    a: [0],
    e: "The Q&A visual interprets natural language questions and returns a visual. Copilot in Power BI extends this with generative AI to create report pages and summaries."
  },
  {
    q: "Which Power BI component is required to refresh a published semantic model that uses data from an on-premises SQL Server?",
    o: ["On-premises data gateway", "Power BI mobile app", "Azure Data Box", "Self-hosted integration runtime"],
    a: [0],
    e: "The on-premises data gateway acts as a secure bridge between the Power BI service and on-premises data sources, enabling scheduled refresh and live/DirectQuery connections."
  },
  {
    q: "Which Power BI storage mode loads a copy of the data into the model for very fast queries, but requires a refresh to see new data?",
    o: ["Import", "DirectQuery", "Live connection", "Dual"],
    a: [0],
    e: "Import mode caches data in the in-memory VertiPaq engine, giving the best query performance. Data is only as current as the last refresh. DirectQuery sends queries to the source each time, keeping data current but usually slower."
  },
  {
    q: "Which Power BI connectivity mode queries the source database at report time, so visuals always show current data without importing it?",
    o: ["DirectQuery", "Import", "Paginated", "Power Query"],
    a: [0],
    e: "DirectQuery leaves data in the source and sends a query whenever a visual needs data. It suits very large or near real-time data. In Fabric, Direct Lake mode reads Delta tables in OneLake directly, combining near-import speed with fresh data."
  },
  {
    q: "In Microsoft Fabric, which Power BI storage mode reads Delta tables directly from OneLake without importing or sending queries to a SQL engine?",
    o: ["Direct Lake", "DirectQuery", "Import", "Composite"],
    a: [0],
    e: "Direct Lake loads Parquet/Delta column data from OneLake into memory on demand. It provides performance close to Import mode with the freshness of DirectQuery, and avoids scheduled data copies."
  },
  {
    q: "Which type of Power BI report is designed to be printed or exported, with pixel-perfect layout and data that can span many pages, such as invoices?",
    o: ["Paginated report", "Dashboard", "Interactive report", "Q&A report"],
    a: [0],
    e: "Paginated reports (built with Power BI Report Builder) are formatted to fit pages exactly and render all rows across many pages. They suit operational documents like invoices and statements."
  },
  {
    q: "In the Power BI service, what is a workspace?",
    o: ["A container for creating and sharing reports, models and other items", "A dedicated server in the Power BI service that hosts one organisation's reports", "A page in a report that groups related visuals together for a single audience", "A DAX function that returns all of the tables in the current semantic model"],
    a: [0],
    e: "Workspaces hold related content and are where teams collaborate, with roles such as Admin, Member, Contributor and Viewer. In Fabric, workspaces also contain lakehouses, warehouses, notebooks and pipelines."
  },
  {
    q: "Which TWO are typical steps a data analyst takes in Power BI? (Choose two.)",
    o: ["Prepare and transform data with Power Query", "Model data and create DAX measures", "Configure backups for the source SQL databases", "Patch the on-premises data gateway servers", "Patch the servers that run the Power BI service"],
    a: [0, 1],
    e: "Analysts prepare, model, visualise and analyse data. Database backups and gateway server patching are administrator tasks, and Microsoft runs and patches the Power BI service."
  },
  {
    q: "Which TWO elements are part of a typical large-scale analytics architecture on Azure? (Choose two.)",
    o: ["Data ingestion and processing (for example, Data Factory pipelines and Spark)", "Analytical data store (for example, a data lake, lakehouse or data warehouse)", "A single shared spreadsheet that every analyst edits as the analytical store of record", "Reports that query the production OLTP database directly, with no other components", "Manual copy-and-paste of data between source systems and reports by business users"],
    a: [0, 1],
    e: "Large-scale analytics usually includes ingestion and processing (ETL/ELT), an analytical store (lake, lakehouse or warehouse), an optional modelling layer, and visualisation such as Power BI. A shared spreadsheet, reporting straight off the OLTP database, and manual copying do not scale and are not part of a designed analytics architecture."
  },
  {
    q: "Which TWO are valid ways to ingest data in Microsoft Fabric? (Choose two.)",
    o: ["Data pipelines (Data Factory in Fabric)", "Dataflows Gen2 using Power Query", "Azure Database Migration Service", "Azure Site Recovery replication", "Restoring a SQL Server .bak file into a Power BI report"],
    a: [0, 1],
    e: "Fabric Data Factory includes pipelines for orchestration and copying, and Dataflows Gen2 for low-code Power Query transformations. Notebooks, eventstreams, mirroring and shortcuts are other ingestion options. Database Migration Service and Site Recovery move databases and VMs between environments, and Power BI reports cannot restore database backups."
  },
  {
    q: "What is a Dataflow Gen2 in Microsoft Fabric?",
    o: ["A low-code Power Query tool that ingests and transforms data into a lakehouse or warehouse", "A streaming engine that captures IoT events and routes them to Fabric destinations", "A relational database in Fabric that supports T-SQL inserts, updates and deletes", "A Spark notebook that transforms data with PySpark code and saves Delta tables"],
    a: [0],
    e: "Dataflow Gen2 brings the Power Query experience to Fabric with many connectors and transformations, and can write results to destinations like lakehouses, warehouses and Azure SQL."
  },
  {
    q: "A company wants to query Parquet files in Azure Data Lake Storage using T-SQL without loading them into a database and without provisioning compute in advance. What should it use?",
    o: ["Azure Synapse serverless SQL pool", "Azure SQL Database elastic pool", "Azure Synapse dedicated SQL pool", "Azure Database for MySQL"],
    a: [0],
    e: "The serverless SQL pool queries data lake files directly with T-SQL and charges per TB processed, with nothing to provision. Dedicated pools require provisioned compute and loading data into tables."
  },
  {
    q: "Which TWO tasks are typical of batch analytical processing? (Choose two.)",
    o: ["Nightly loading of sales data into a data warehouse", "Recalculating monthly customer segments from historical data", "Triggering an alert within one second when a sensor exceeds a threshold", "Displaying stock prices that update every second", "Showing live vehicle locations on a map as they move"],
    a: [0, 1],
    e: "Nightly loads and monthly recalculations work on bounded datasets on a schedule, which makes them batch. Sub-second alerts and live tickers require stream processing. Live location tracking is a streaming scenario."
  },
  {
    q: "Which describes the 'lambda' or 'hot and cold path' approach to analytics?",
    o: ["Combining real-time stream processing (hot path) with batch processing (cold path)", "Processing all data once per year in a single large batch to reduce compute costs", "Storing hot data in one Power BI dashboard and cold data in a separate dashboard", "Using serverless databases for hot data and provisioned databases for cold data"],
    a: [0],
    e: "Many architectures process streaming data for immediate insights while also storing all data for batch analysis. Results from both paths can be combined for complete reporting."
  },
  {
    q: "Which Azure service would you use to orchestrate copying data from 50 SaaS and on-premises sources into a data lake on a nightly schedule?",
    o: ["Azure Data Factory", "Azure Stream Analytics", "Power BI dataflows", "Azure Event Hubs"],
    a: [0],
    e: "Data Factory's connectors, pipelines, triggers and monitoring are designed for orchestrated, scheduled batch ingestion from many sources."
  },
  {
    q: "Which statement about Azure Synapse Analytics dedicated SQL pools is correct?",
    o: ["Compute can be paused to save costs, while storage is still billed", "They support only NoSQL queries over JSON files in the data lake", "They are billed only per TB of data processed by each query", "They store data in row format optimised for single-row lookups"],
    a: [0],
    e: "Dedicated SQL pools can be paused, which stops compute billing; storage is still charged. Per-TB billing applies to serverless SQL pools."
  },
  {
    q: "What does MPP (massively parallel processing) mean in the context of a data warehouse?",
    o: ["Queries are split across many compute nodes that each process part of the data", "Each query runs on a single CPU core so results are always returned in order", "All of the data is held only in memory, so nothing is written to disk", "Queries are queued and run one at a time so they never compete for resources"],
    a: [0],
    e: "MPP engines distribute data and query work across many nodes, then combine results. This enables fast queries over very large datasets, as in Synapse dedicated SQL pools and Fabric Warehouse."
  },
  {
    q: "Which Azure Databricks feature provides unified governance, including access control, auditing and lineage, across workspaces?",
    o: ["Unity Catalog", "Delta Live Tables", "Photon", "MLflow"],
    a: [0],
    e: "Unity Catalog is Databricks' centralised governance layer for data and AI assets, providing fine-grained permissions, auditing, lineage and discovery."
  },
  {
    q: "Which Power BI feature restricts the data that specific users can see in a report, for example limiting sales managers to their own region?",
    o: ["Row-level security", "Slicers", "Bookmarks", "Sensitivity labels"],
    a: [0],
    e: "Row-level security uses DAX filter roles on the semantic model. Users assigned to a role only see rows matching that role's filters, wherever they view the report."
  },
  {
    q: "Which TWO statements about Azure Stream Analytics are correct? (Choose two.)",
    o: ["It uses a SQL-like query language", "It can output results directly to Power BI for real-time dashboards", "It is primarily a tool for designing star schemas", "It requires you to manage your own Spark cluster", "It stores data long term as its own data warehouse"],
    a: [0, 1],
    e: "Stream Analytics jobs are written in a SQL-like language and can output to Power BI, SQL, storage, Cosmos DB and more. It's fully managed with no cluster management. Stream Analytics processes data in motion; outputs such as storage or databases persist the results."
  },
  {
    q: "You need to calculate the average temperature reported by each sensor every 5 minutes, with each event counted in exactly one interval. Which Stream Analytics function is most appropriate?",
    o: ["TumblingWindow(minute, 5)", "HoppingWindow(minute, 10, 5)", "SessionWindow(minute, 5, 10)", "SlidingWindow(minute, 5)"],
    a: [0],
    e: "Tumbling windows produce non-overlapping, back-to-back intervals, so each event falls in exactly one 5-minute bucket. A typical query is `SELECT DeviceId, AVG(Temp) FROM input GROUP BY DeviceId, TumblingWindow(minute, 5)`."
  },
  {
    q: "Which component in a real-time analytics architecture acts as a buffer that receives high-volume events from producers and lets multiple consumers read them independently?",
    o: ["An event broker such as Event Hubs", "A Power BI real-time dashboard", "A relational table with a primary key", "A Blob Storage container in the hot tier"],
    a: [0],
    e: "Event brokers like Event Hubs (or Kafka) decouple producers from consumers, buffer events durably for a retention period, and support partitions and consumer groups so multiple applications can read the same stream."
  },
  {
    q: "Which TWO are outputs commonly used for streaming data processed by Azure Stream Analytics? (Choose two.)",
    o: ["Power BI (real-time dashboard)", "Azure Data Lake Storage (for later batch analysis)", "Azure Data Box", "An Azure Backup vault", "An Azure Files share mapped by users"],
    a: [0, 1],
    e: "Stream Analytics can send results to Power BI for live visuals and to stores such as Data Lake Storage, Blob Storage, SQL Database or Cosmos DB for persistence. Data Box, Backup vaults and Azure Files shares are not Stream Analytics outputs."
  },
  {
    q: "Which Microsoft Fabric experience is aimed at data scientists for building and training machine learning models with notebooks and MLflow experiment tracking?",
    o: ["Data Science", "Real-Time Intelligence", "Data Warehouse", "Power BI"],
    a: [0],
    e: "Fabric Data Science provides notebooks, experiments, ML models and integration with MLflow and SynapseML, using data from OneLake."
  },
  {
    q: "Which language would a data engineer use to write code that transforms data in a Microsoft Fabric lakehouse notebook?",
    o: ["PySpark, Spark SQL, Scala or R", "DAX or M", "KQL only", "T-SQL only"],
    a: [0],
    e: "Fabric notebooks run on Apache Spark and support PySpark, Spark SQL, Scala and SparkR. DAX is for semantic models, and M is used in Power Query/Dataflows."
  },
  {
    q: "In a Microsoft Fabric lakehouse, in which format are managed tables stored?",
    o: ["Delta Lake", "CSV", "Avro", "ORC"],
    a: [0],
    e: "Fabric standardises on Delta Lake, so tables written by Spark, the Warehouse, Dataflows or pipelines are all Delta tables in OneLake that every Fabric engine can read."
  },
  {
    q: "Which statement best describes the relationship between Azure Synapse Analytics and Microsoft Fabric?",
    o: ["Fabric is the SaaS evolution of Synapse capabilities, combined with Power BI on OneLake", "Fabric is a NoSQL database service that replaces Azure Cosmos DB for analytical data", "Fabric requires an Azure Synapse workspace and runs its workloads inside that workspace", "Synapse and Fabric are unrelated services that share no capabilities or engines"],
    a: [0],
    e: "Microsoft Fabric evolves the Synapse experiences into an integrated SaaS platform with shared storage (OneLake) and capacity. Synapse remains available as a PaaS service but Fabric is the strategic direction."
  },
  {
    q: "Which of the following is an example of a fact in a sales analytics model?",
    o: ["SalesAmount", "CustomerCity", "ProductColour", "StoreManagerName"],
    a: [0],
    e: "Facts are numeric measures of business events, such as SalesAmount and Quantity. City, colour and manager name are descriptive attributes stored in dimension tables."
  },
  {
    q: "Which TWO statements about a Power BI dashboard are correct? (Choose two.)",
    o: ["It can contain tiles pinned from multiple reports", "It is created in the Power BI service, not in Power BI Desktop", "It can have multiple pages", "It is the same as a Power BI semantic model", "It is where Power Query transformations are defined"],
    a: [0, 1],
    e: "Dashboards are single-page canvases built in the Power BI service by pinning tiles from one or more reports. Multi-page content is a report, and the semantic model is the underlying data model. Power Query transformations are defined in Power BI Desktop or dataflows, not in dashboards."
  },
  {
    q: "Which Power BI visual best shows each category's contribution to a whole when there are only a few categories?",
    o: ["Donut chart", "Line chart", "Scatter chart", "Card"],
    a: [0],
    e: "Pie and donut charts show the proportion each part contributes to the whole and work best with a small number of categories. With many categories a bar chart or treemap is easier to read."
  },
  {
    q: "Which Power BI visual shows how an initial value is increased and decreased by a series of positive and negative changes, such as moving from opening to closing balance?",
    o: ["Waterfall chart", "Gauge", "Scatter chart", "Slicer"],
    a: [0],
    e: "Waterfall charts show a running total as values are added or subtracted, making them ideal for financial bridges like revenue to profit."
  },
  {
    q: "Which TWO tasks are performed by a data engineer in an analytics solution? (Choose two.)",
    o: ["Building pipelines that load data into a lakehouse", "Designing the bronze, silver and gold layers of a data lake", "Granting database permissions and configuring backups", "Designing report visuals and DAX measures for executives", "Managing who can access each Power BI workspace"],
    a: [0, 1],
    e: "Data engineers design and build ingestion pipelines and data architectures such as medallion layers. Permissions and backups are database administrator tasks, report visuals and DAX measures are data analyst work, and workspace access is managed by administrators or workspace owners."
  },
  {
    q: "Which Azure service is primarily used for big data processing with Apache Spark, collaborative notebooks, and machine learning, and integrates natively with Microsoft Entra ID and Azure Data Lake Storage?",
    o: ["Azure Databricks", "Azure SQL Managed Instance", "Azure Table storage", "Azure Files"],
    a: [0],
    e: "Azure Databricks provides managed Spark clusters and notebooks for data engineering, data science and ML, integrated with Azure identity and storage."
  },
  {
    q: "Which analytics store would you choose to provide business users with a governed SQL-based model for reporting, with full T-SQL write support, in Microsoft Fabric?",
    o: ["Fabric Warehouse", "Eventstream", "OneLake shortcut", "Dataflow Gen2"],
    a: [0],
    e: "Fabric Warehouse supports full T-SQL DDL and DML with transactions, making it suitable for SQL-centric teams building governed reporting models. Eventstreams move streaming data, shortcuts reference external data, and dataflows transform data."
  },
  {
    q: "A retailer needs to show live store foot-traffic counts on a dashboard, updating within seconds. Which combination is MOST appropriate?",
    o: ["IoT Hub → Stream Analytics or Fabric eventstream → real-time dashboard", "Data Factory nightly pipeline → data warehouse → Excel workbook", "Azure Files share → paginated report emailed every hour", "Azure Data Box shipment → Azure SQL Database → Power BI"],
    a: [0],
    e: "Real-time requirements call for streaming ingestion (IoT Hub/Event Hubs), stream processing (Stream Analytics or Fabric Real-Time Intelligence) and a dashboard that updates continuously. Nightly pipelines and Data Box are batch or offline approaches."
  },
  {
    q: "What is the purpose of a data model, such as a semantic model or OLAP cube, in an analytics solution?",
    o: ["To organise data into measures and dimensions so analysts can query it easily and quickly", "To store the raw files from source systems so they can be reprocessed later if needed", "To capture new business transactions as they happen with full ACID guarantees", "To encrypt the data warehouse so that only approved analysts can read sensitive data"],
    a: [0],
    e: "Analytical models present data in business terms (facts, measures, dimensions, hierarchies) and often pre-aggregate it, so users can explore data quickly without knowing the underlying table structures."
  },
  {
    q: "Which Power BI capability allows a report author to define a calculation once, for example 'Profit Margin', and reuse it in any visual?",
    o: ["Creating a measure in the model", "Adding a text box to each page", "Creating a bookmark for the visual", "Adding a calculated column per visual"],
    a: [0],
    e: "Measures defined in the model are reusable across visuals and reports, and they respond to filter context. This keeps calculation logic consistent."
  },
  {
    q: "Which TWO statements about Power BI on mobile devices are correct? (Choose two.)",
    o: ["Power BI mobile apps let users view and interact with reports and dashboards on iOS and Android", "Report authors can create mobile-optimised layouts for report pages", "Reports must be completely rebuilt in a separate design tool before mobile users can view them", "Mobile apps require each user to buy a separate Power BI Mobile licence in addition to Pro", "Mobile apps can only display dashboard tiles, so report pages are not available on phones"],
    a: [0, 1],
    e: "Power BI mobile apps display published reports and dashboards, and authors can design a mobile layout for each report page in Power BI Desktop. No separate tool or separate mobile licence is needed; users need the same access they would have in the browser."
  },
  {
    q: "Which Azure service acts as a fully managed Apache Kafka-compatible endpoint, so Kafka producers can send events without running a Kafka cluster?",
    o: ["Azure Event Hubs", "Azure Queue storage", "Azure Synapse dedicated SQL pool", "Azure Data Explorer"],
    a: [0],
    e: "Event Hubs provides a Kafka endpoint, so existing Kafka clients can connect by changing configuration, without managing brokers or ZooKeeper. HDInsight can also host Kafka clusters if full control is needed."
  },
  {
    q: "Which describes 'data at rest' versus 'data in motion' in analytics?",
    o: ["Data at rest is stored and processed in batches; data in motion is processed as it flows", "Data at rest is always encrypted; data in motion is never encrypted while it travels", "Data at rest is unstructured; data in motion is always structured rows of a table", "Data at rest lives in the cloud; data in motion lives only on on-premises servers"],
    a: [0],
    e: "Batch analytics usually works on stored data (at rest), while stream analytics processes events as they arrive (in motion). Both can be encrypted, and both can be structured or not."
  },
  {
    q: "Which TWO are benefits of using Microsoft Fabric for analytics? (Choose two.)",
    o: ["A single copy of data in OneLake can be used by Spark, SQL, KQL and Power BI engines", "Unified governance, security and capacity management across workloads", "Each workload keeps its own separate copy of the data, with its own storage and billing model", "It must be deployed into your own Azure virtual network as infrastructure as a service", "Each user must create, size and manage their own Spark cluster before running notebooks"],
    a: [0, 1],
    e: "Fabric's open Delta format in OneLake lets many engines read the same data, reducing duplication, and the SaaS platform centralises governance (with Purview integration) and capacity. Fabric is software as a service, so there is no infrastructure to deploy, and Spark compute is managed for you."
  },
  {
    q: "A data analyst needs to combine data from an Excel file, a SharePoint list and an Azure SQL Database into one Power BI report. What does Power BI support?",
    o: ["Combining several sources in one model, with relationships between them", "Using only one data source in each report, combined later in a dashboard", "Importing the Excel file and SharePoint list only; SQL requires DirectQuery", "Copying all three sources into Azure Cosmos DB before connecting Power BI"],
    a: [0],
    e: "Power BI has hundreds of connectors. A single semantic model can combine data from many sources, shaped in Power Query and related in the model view."
  },
  {
    q: "Which component of Azure Synapse Analytics and Azure Data Factory performs a single processing step within a pipeline, such as Copy data or running a notebook?",
    o: ["Activity", "Linked service", "Dataset", "Integration runtime"],
    a: [0],
    e: "Activities are the steps in a pipeline: data movement (Copy), transformation (Data flow, Notebook, Stored procedure) and control flow (ForEach, If Condition, Wait)."
  },
  {
    q: "What does the Copy activity in Azure Data Factory do?",
    o: ["Copies data from a source store to a sink store, optionally converting formats", "Creates a Power BI semantic model and dashboard from the copied tables", "Backs up a virtual machine's disks to a Recovery Services vault", "Encrypts a database's data files using customer-managed keys"],
    a: [0],
    e: "The Copy activity moves data between supported stores (for example, from on-premises SQL Server to Data Lake Storage as Parquet) and can map columns and convert formats."
  },
  {
    q: "Which TWO statements describe Azure Data Explorer? (Choose two.)",
    o: ["It is optimised for log and time-series analytics over large volumes of data", "It uses the Kusto Query Language (KQL)", "It is mainly a document database for JSON application data", "It is a relational OLTP database for order processing", "It requires data to be converted to CSV before it can be queried"],
    a: [0, 1],
    e: "Azure Data Explorer ingests large volumes of telemetry and logs and queries them quickly with KQL. It is not a document database for application data or a transactional database, and it ingests many formats (JSON, Parquet, Avro, CSV and more) directly."
  },
  {
    q: "Which TWO are typical sources of streaming data? (Choose two.)",
    o: ["IoT sensors sending readings every second", "Clickstream events from a website", "A monthly invoice batch file uploaded to storage", "A nightly export of the customer table", "A product catalogue updated once a quarter"],
    a: [0, 1],
    e: "Streaming data is continuous and time-ordered, such as sensor telemetry, clickstreams, application logs and financial ticks. Monthly files, nightly exports and quarterly catalogue updates are batch data."
  },
  {
    q: "Which Power BI feature lets you share a packaged collection of reports and dashboards with a large audience in a read-only, easy-to-navigate form?",
    o: ["Power BI app", "Power Query", "Power BI Desktop file (.pbix) via email", "Gateway"],
    a: [0],
    e: "Workspace content can be published as a Power BI app for consumers. Apps provide navigation, audience-based permissions and a stable published version separate from work in progress."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nA Power BI dashboard can contain multiple pages.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. A dashboard is a single-page canvas of tiles in the Power BI service. Multi-page content is a report."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure Stream Analytics can send query results directly to Power BI.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Power BI is a supported Stream Analytics output, which makes it easy to build real-time dashboards from streaming data."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nIn Microsoft Fabric, a lakehouse stores its tables in Delta format in OneLake.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Fabric lakehouse tables are Delta Lake tables (Parquet files plus a transaction log) stored in OneLake, so other Fabric engines can read them directly."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nThe Azure Synapse Analytics serverless SQL pool requires you to provision and pay for compute in advance.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. The serverless SQL pool needs no provisioning and is billed per TB of data processed. Dedicated SQL pools are the provisioned option."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nA tumbling window in Azure Stream Analytics can assign the same event to more than one window.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. Tumbling windows are fixed-size, non-overlapping and contiguous, so each event belongs to exactly one window. Hopping windows overlap and can include an event in several windows."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nPower Query is used in Power BI to clean and transform data before it is loaded into the model.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Power Query connects to sources and shapes data (removing columns, changing types, merging queries) using the M language. DAX is then used for calculations inside the model."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure Data Factory can copy data from an on-premises SQL Server by using a self-hosted integration runtime.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. A self-hosted integration runtime installed inside the private network gives Data Factory secure access to on-premises sources without opening inbound firewall ports."
  },
  {
    q: "Which Power BI storage mode keeps a copy of the data in memory and needs a refresh to show new data?",
    o: ["Import", "DirectQuery", "Direct Lake"],
    a: [0],
    e: "Import caches data in memory for the fastest queries, but data is only as fresh as the last refresh. DirectQuery queries the source every time, and Direct Lake reads Delta tables from OneLake on demand."
  },
  {
    q: "In Azure Data Factory, which component holds the connection information for a data store?",
    o: ["Linked service", "Dataset", "Trigger"],
    a: [0],
    e: "A linked service is like a connection string. A dataset points to specific data within that store, and a trigger starts pipeline runs."
  },
  {
    q: "Which medallion architecture layer holds aggregated, business-ready data used for reporting?",
    o: ["Gold", "Silver", "Bronze"],
    a: [0],
    k: 1,
    e: "Bronze holds raw ingested data, silver holds cleansed and conformed data, and gold holds curated, aggregated tables ready for reports."
  },
  {
    q: "Which visual is BEST for showing a trend in monthly revenue over two years?",
    o: ["Line chart", "Pie chart", "Card"],
    a: [0],
    e: "Line charts show change over a continuous time axis. Pie charts show parts of a whole, and cards show a single value."
  },
  {
    q: "Which Azure service is designed to receive telemetry from millions of IoT devices and send commands back to individual devices?",
    o: ["Azure IoT Hub", "Azure Event Hubs", "Azure Data Factory"],
    a: [0],
    e: "IoT Hub supports per-device identity and two-way (cloud-to-device) messaging. Event Hubs ingests events at scale but has no device management, and Data Factory orchestrates batch data movement."
  },
  {
    q: "Which Microsoft Fabric feature groups workspaces by business area, such as Sales or Finance, so they can be governed together?",
    o: ["Domains", "Shortcuts", "Mirroring", "Eventstreams"],
    a: [0],
    e: "Fabric domains organise workspaces into business areas so administrators can delegate governance and users can discover data by area. Shortcuts reference data, mirroring replicates databases, and eventstreams route events."
  },
  {
    q: "Which Azure Data Factory activity runs a set of activities once for each item in a collection, such as each file name in a list?",
    o: ["ForEach", "Copy data", "Lookup", "Wait"],
    a: [0],
    e: "ForEach is a control-flow activity that iterates over a collection and runs inner activities for each item. Copy data moves data, Lookup reads a value or dataset, and Wait pauses a pipeline."
  },
  {
    q: "In Apache Spark, what is a DataFrame?",
    o: ["A distributed table of data with named columns", "A Power BI visual that shows data in a grid", "A storage container that holds Parquet files", "A type of index on a SQL Server table"],
    a: [0],
    e: "A DataFrame is Spark's main data structure: a table-like dataset partitioned across the cluster and processed in parallel with PySpark, Scala, R or Spark SQL."
  },
  {
    q: "Which Delta Lake feature lets you query a table as it was at an earlier version or point in time?",
    o: ["Time travel", "Partition pruning", "Z-ordering", "Schema-on-read"],
    a: [0],
    e: "Delta Lake keeps a transaction log of every change, so you can read older versions (for example `VERSION AS OF 3`) to audit changes or recover data."
  },
  {
    q: "In a Power BI model, what is the difference between a calculated column and a measure?",
    o: ["A calculated column is computed per row and stored; a measure is calculated at query time using current filters", "A measure is computed per row and stored; a calculated column is calculated at query time using current filters", "A calculated column can only contain text values, while a measure can only contain whole numbers and dates", "A calculated column is written in M during refresh, while a measure is written in T-SQL and runs at the source"],
    a: [0],
    e: "Calculated columns are evaluated row by row during refresh and take up memory. Measures are evaluated on demand in the filter context of each visual, which makes them the right choice for aggregations like totals and ratios."
  },
  {
    q: "Which data model design does Microsoft recommend for Power BI semantic models?",
    o: ["Star schema", "A single flat table with every column", "Fully normalized third normal form", "A graph of nodes and edges"],
    a: [0],
    e: "Star schemas, with fact tables related to dimension tables, give the best performance and the most intuitive filtering in Power BI. Flat tables and highly normalized designs lead to larger models or complex relationships."
  },
  {
    q: "In a Power BI model, what is the cardinality of the relationship between a Customer dimension table and a Sales fact table?",
    o: ["One-to-many", "Many-to-many", "One-to-one", "Many-to-one from Sales to a bridge table"],
    a: [0],
    e: "Each customer appears once in the dimension but can have many rows in the fact table, so the relationship is one-to-many, and filters flow from the dimension to the fact table."
  },
  {
    q: "Which Power BI feature lets a user right-click a data point and go to a detail page that is automatically filtered to that item?",
    o: ["Drillthrough", "Q&A", "Slicer sync", "Row-level security"],
    a: [0],
    e: "Drillthrough pages are filtered by the item the user selected, such as a specific product, to show detail. Q&A answers natural language questions, and row-level security restricts data."
  },
  {
    q: "Which Power BI visual shows hierarchical data as nested rectangles sized by value?",
    o: ["Treemap", "Line chart", "Card", "Gauge"],
    a: [0],
    e: "Treemaps display parts of a whole as nested rectangles whose size represents value, which helps spot the largest contributors among many categories."
  },
  {
    q: "In Azure Stream Analytics, which input type lets you join a stream with slowly changing lookup data, such as device names stored in Blob Storage or SQL Database?",
    o: ["Reference data input", "Stream input", "Output alias", "Tumbling window"],
    a: [0],
    e: "Reference data inputs hold static or slowly changing data that the query joins with events to enrich them. Stream inputs carry the events themselves."
  },
  {
    q: "In Azure Event Hubs, what allows several applications to read the same event stream independently, each at its own pace?",
    o: ["Consumer groups", "Access tiers", "Linked services", "Shortcuts"],
    a: [0],
    e: "Each consumer group is an independent view of the event stream with its own read positions, so a dashboard and an archiving job can read the same events separately."
  },
  {
    q: "Which Kusto Query Language (KQL) operator aggregates rows, for example counting events per device?",
    o: ["summarize", "where", "project", "take"],
    a: [0],
    e: "`summarize` groups rows and computes aggregates such as `count()` or `avg()`. `where` filters rows, `project` selects columns, and `take` returns a sample of rows."
  },
  {
    q: "Which Azure HDInsight cluster type is designed for building real-time streaming data pipelines with a publish-subscribe model?",
    o: ["Apache Kafka", "Apache HBase", "Interactive Query (Hive LLAP)", "ML Services"],
    a: [0],
    e: "Kafka clusters provide a distributed publish-subscribe log for streaming pipelines. HBase is a NoSQL store, and Interactive Query is for fast Hive SQL queries."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nReports created in Power BI Desktop can be published to the Power BI service.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Publishing uploads the report and its semantic model to a workspace in the Power BI service, where it can be shared and pinned to dashboards."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nThe SQL analytics endpoint of a Microsoft Fabric lakehouse supports INSERT and UPDATE statements.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. The lakehouse SQL analytics endpoint is read-only. You change lakehouse tables with Spark, pipelines or dataflows, or use a Fabric Warehouse for full T-SQL writes."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure Event Hubs retains events for a configurable period, so consumers can read them after they arrive.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Event Hubs stores events for a retention period (for example 1 to 7 days on Standard, longer on Premium and Dedicated), so consumers can read and replay events."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nAzure Data Factory mapping data flows require you to write Spark code.",
    o: ["Yes", "No"],
    a: [1],
    k: 1,
    e: "No. Mapping data flows are designed visually. Data Factory generates and runs the Spark code for you on managed clusters."
  },
  {
    q: "Select Yes if the statement is true. Otherwise, select No.\n\nA Power BI semantic model can be used by more than one report.",
    o: ["Yes", "No"],
    a: [0],
    k: 1,
    e: "Yes. Several reports can connect to the same shared semantic model, which keeps measures and definitions consistent across the organisation."
  },
  {
    q: "Which two tools can you use to create and edit Power BI reports? (Choose two.)",
    o: ["Power BI Desktop", "The Power BI service in a web browser", "SQL Server Management Studio", "Azure Storage Explorer", "Azure Data Factory Studio"],
    a: [0, 1],
    e: "Reports are authored in Power BI Desktop and can also be created and edited in the Power BI service. SSMS manages databases, Storage Explorer manages storage accounts, and Data Factory Studio builds data pipelines."
  },
  {
    q: "Which two Azure services are used to ingest streaming event data? (Choose two.)",
    o: ["Azure Event Hubs", "Azure IoT Hub", "Azure Data Box", "Azure Files", "Azure Synapse dedicated SQL pool"],
    a: [0, 1],
    e: "Event Hubs and IoT Hub receive high volumes of events in real time. Data Box moves data offline, Azure Files provides file shares, and a dedicated SQL pool is a data warehouse."
  },
  {
    q: "Which two statements about Delta Lake tables are correct? (Choose two.)",
    o: ["They support ACID transactions on data lake files", "They store data as Parquet files with a transaction log", "They can only be read by Power BI, not by Spark or SQL engines", "They store data as CSV files, with one file per table partition", "They require a relational database server to manage the files"],
    a: [0, 1],
    e: "Delta Lake adds a transaction log to Parquet files, enabling ACID transactions, updates, deletes and time travel. Many engines (Spark, SQL endpoints, Power BI Direct Lake) read Delta tables, and no database server is needed."
  },
  {
    q: "Which Stream Analytics window counts events in 10-minute windows that start every 5 minutes, so the windows overlap?",
    o: ["Hopping window", "Tumbling window", "Session window"],
    a: [0],
    e: "Hopping windows have a fixed size and a hop interval; when the hop is shorter than the size, windows overlap. Tumbling windows never overlap, and session windows depend on gaps between events."
  },
  {
    q: "In the medallion architecture, which layer stores raw data exactly as it was ingested from source systems?",
    o: ["Bronze", "Silver", "Gold"],
    a: [0],
    k: 1,
    e: "Bronze holds raw ingested data, silver holds cleansed and conformed data, and gold holds aggregated, business-ready data."
  },
  {
    q: "Which Microsoft Fabric item is designed to store and query large volumes of streaming telemetry using KQL?",
    o: ["Eventhouse", "Warehouse", "Lakehouse"],
    a: [0],
    e: "An eventhouse hosts KQL databases optimised for time-series and event data. Warehouses are queried with T-SQL, and lakehouses are mainly used with Spark and Delta files."
  },
  {
    t: "yesno",
    q: "Consider these statements about Microsoft Fabric.",
    s: [
      ["All Microsoft Fabric workloads store their data in OneLake.", true],
      ["A Fabric lakehouse can only be queried with Apache Spark.", false],
      ["Microsoft Fabric is a software as a service (SaaS) platform.", true]
    ],
    e: "1 Yes: OneLake is the single data lake shared by every Fabric workload. 2 No: each lakehouse also has a SQL analytics endpoint for read-only T-SQL, and Power BI can read its tables with Direct Lake. 3 Yes: Fabric is SaaS, so there is no infrastructure to manage."
  },
  {
    t: "yesno",
    q: "Consider these statements about real-time analytics.",
    s: [
      ["Stream processing typically aggregates events within time windows.", true],
      ["Batch processing is better than stream processing for detecting fraud as it happens.", false],
      ["Microsoft Fabric Real-Time Intelligence can store streaming data in an eventhouse.", true]
    ],
    e: "1 Yes: streaming queries usually aggregate over windows such as tumbling or hopping windows. 2 No: detecting fraud as it happens needs low latency, which is stream processing. 3 Yes: eventhouses host KQL databases for streaming and time-series data."
  },
  {
    t: "yesno",
    q: "Consider these statements about Power BI semantic models.",
    s: [
      ["Relationships let filters on one table affect related tables.", true],
      ["Measures are calculated at query time based on the current filter context.", true],
      ["A semantic model can only contain data from a single data source.", false]
    ],
    e: "1 Yes: filters flow across relationships, typically from dimension to fact tables. 2 Yes: measures are evaluated dynamically for each visual. 3 No: a model can combine many sources, related in the model view."
  },
  {
    t: "yesno",
    q: "Consider these statements about Azure Databricks.",
    s: [
      ["Azure Databricks is based on Apache Spark.", true],
      ["Azure Databricks notebooks support Python, SQL, Scala and R.", true],
      ["Azure Databricks is a relational OLTP database service for applications.", false]
    ],
    e: "1 Yes: Databricks provides optimised Spark runtimes. 2 Yes: notebooks support all four languages. 3 No: Databricks is an analytics platform for data engineering, data science and ML, not an operational database."
  },
  {
    t: "match",
    q: "Match each requirement to the most appropriate service.",
    c: ["Microsoft Fabric", "Azure Databricks", "Azure Data Factory", "Azure Stream Analytics"],
    s: [
      ["An end-to-end SaaS analytics platform with OneLake and built-in Power BI", 0],
      ["A Spark-based platform with Unity Catalog for data engineering and machine learning", 1],
      ["Orchestrating scheduled copy pipelines from many sources into Azure", 2],
      ["Running SQL-like queries over events from Event Hubs in real time", 3]
    ],
    e: "Fabric is the unified SaaS analytics platform built on OneLake. Databricks is a Spark platform with Unity Catalog governance. Data Factory orchestrates data movement. Stream Analytics runs continuous SQL-like queries on streams."
  },
  {
    t: "match",
    q: "Match each Power BI visual to the scenario it suits best.",
    c: ["Line chart", "Bar chart", "Card", "Scatter chart", "Filled map"],
    s: [
      ["Revenue trend over the last 24 months", 0],
      ["Comparing total sales across product categories", 1],
      ["Showing total revenue as a single number", 2],
      ["The relationship between advertising spend and sales", 3],
      ["Sales by country", 4]
    ],
    e: "Line charts show trends over time, bar charts compare categories, cards show a single value, scatter charts show correlation between two measures, and filled maps shade geographic areas by value."
  },
  {
    t: "match",
    q: "Match each Microsoft Fabric item to its description.",
    c: ["Lakehouse", "Warehouse", "Eventhouse", "Semantic model"],
    s: [
      ["Stores files and Delta tables, and is mainly used with Spark", 0],
      ["Supports full T-SQL inserts, updates and deletes", 1],
      ["Stores streaming and time-series data in KQL databases", 2],
      ["Defines the tables, relationships and measures that Power BI reports use", 3]
    ],
    e: "A lakehouse combines files and Delta tables (with a read-only SQL endpoint). A warehouse is a fully transactional T-SQL store. An eventhouse hosts KQL databases for real-time data. A semantic model is the Power BI layer of tables, relationships and measures."
  },
  {
    t: "match",
    q: "Match each Azure Stream Analytics window type to its description.",
    c: ["Tumbling", "Hopping", "Sliding", "Session"],
    s: [
      ["Fixed-size, non-overlapping, back-to-back intervals", 0],
      ["Fixed-size windows that overlap because they advance by a smaller interval", 1],
      ["Windows that produce output only when an event enters or leaves the window", 2],
      ["Groups events that arrive close together and ends after a period of inactivity", 3]
    ],
    e: "Tumbling windows never overlap. Hopping windows have a hop smaller than their size, so they overlap. Sliding windows emit output only when the window's contents change. Session windows group bursts of activity separated by a timeout."
  },
  {
    t: "complete",
    q: "In Power BI, you clean and shape data with {0}, and you write calculations such as measures with {1}.",
    b: [
      { o: ["Power Query", "DAX", "Q&A"], a: 0 },
      { o: ["Power Query", "DAX", "KQL"], a: 1 }
    ],
    e: "Power Query (using the M language) connects to and transforms data before it is loaded. DAX defines measures, calculated columns and calculated tables in the model."
  },
  {
    t: "complete",
    q: "The single, organisation-wide data lake that every Microsoft Fabric workload uses is called {0}.",
    b: [
      { o: ["OneLake", "Delta Lake", "Azure Data Lake Storage Gen1", "the Real-Time hub"], a: 0 }
    ],
    e: "OneLake is Fabric's built-in data lake. Delta Lake is the table format used inside it, ADLS Gen1 is a retired service, and the Real-Time hub is where you discover streaming data."
  },
  {
    t: "complete",
    q: "A Power BI {0} can have many pages of interactive visuals, while a {1} is a single page of tiles pinned from one or more reports.",
    b: [
      { o: ["report", "dashboard", "semantic model"], a: 0 },
      { o: ["report", "dashboard", "workspace"], a: 1 }
    ],
    e: "Reports are multi-page and built on one semantic model. Dashboards are single-page canvases in the Power BI service with tiles pinned from one or more reports."
  },
  {
    t: "complete",
    q: "In Microsoft Fabric, the {0} is the central place to discover, connect to and manage streaming data across the organisation.",
    b: [
      { o: ["Real-Time hub", "OneLake catalog", "lakehouse explorer", "deployment pipeline"], a: 0 }
    ],
    e: "The Real-Time hub lists streaming sources and eventstreams across the tenant, so you can connect to them and route data into Fabric. The OneLake catalog is for discovering Fabric items and data generally."
  },
  {
    t: "complete",
    q: "Loading raw data into the target analytical store first and transforming it there is called {0}.",
    b: [
      { o: ["ELT", "ETL", "OLTP"], a: 0 }
    ],
    e: "ELT (extract, load, transform) uses the target platform's compute to transform data after loading, which suits cloud lakehouses and warehouses. ETL transforms data before loading, and OLTP describes transactional workloads."
  },
  {
    q: "Which visual is BEST for showing how sales opportunities drop off through stages, from leads to qualified to closed?",
    o: ["Funnel chart", "Scatter chart", "Card", "Treemap"],
    a: [0],
    e: "Funnel charts show values decreasing through sequential stages of a process. Scatter charts show correlation, cards show a single value, and treemaps show parts of a whole."
  },
  {
    q: "You need to show exact values for many products across several columns, such as price, stock and sales. Which visual is MOST appropriate?",
    o: ["Table", "Pie chart", "Gauge"],
    a: [0],
    e: "Table visuals list detailed values in rows and columns. Pie charts show proportions of a whole, and gauges show a single value against a target."
  },
  {
    q: "Which two visuals are good choices for comparing values across categories? (Choose two.)",
    o: ["Bar chart", "Column chart", "Card", "Gauge", "Scatter chart"],
    a: [0, 1],
    e: "Bar and column charts compare categories side by side. Cards and gauges show a single value, and scatter charts show the relationship between two numeric measures."
  },
  {
    q: "Which statement BEST describes Azure Databricks?",
    o: ["A Spark-based analytics platform for data engineering, data science and machine learning", "A SaaS reporting service for building interactive dashboards and paginated reports", "A managed relational database service for transactional business applications", "A messaging service that ingests millions of events per second from applications"],
    a: [0],
    e: "Azure Databricks provides managed Spark clusters, notebooks, Delta Lake and Unity Catalog. Reporting is Power BI, relational databases are Azure SQL and the open-source services, and event ingestion is Event Hubs."
  },
  {
    q: "Which Microsoft Fabric workload would a data engineer use to transform lakehouse data with Spark notebooks?",
    o: ["Data Engineering", "Real-Time Intelligence", "Power BI"],
    a: [0],
    e: "The Data Engineering workload provides lakehouses, notebooks and Spark job definitions. Real-Time Intelligence handles streaming data, and Power BI handles reporting."
  }
]);
