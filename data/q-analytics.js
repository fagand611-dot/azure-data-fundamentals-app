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
    o: ["A logical grouping of activities that together perform a task", "A connection string to a data store", "A virtual machine that runs SQL Server", "A Power BI report"],
    a: [0],
    e: "A pipeline groups activities, such as copying data and running transformations, into a unit that can be scheduled and monitored. Connection information is held in linked services."
  },
  {
    q: "In Azure Data Factory, what defines the connection information needed to connect to an external data store or compute service?",
    o: ["Linked service", "Dataset", "Activity", "Trigger"],
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
    o: ["An integrated analytics service that brings together data warehousing, big data processing with Spark, and data integration pipelines", "A NoSQL database for IoT data", "A file share service", "A tool for creating Power BI dashboards only"],
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
    o: ["Python (PySpark)", "Scala", "DAX", "KQL"],
    a: [0, 1],
    e: "Spark notebooks support Python (PySpark), Scala, Spark SQL and R. DAX is the Power BI modelling language, and KQL is the Kusto query language for Azure Data Explorer and Fabric Real-Time Intelligence."
  },
  {
    q: "What is Apache Spark?",
    o: ["An open-source distributed processing engine for large-scale data processing and analytics in memory", "A relational database engine from Microsoft", "A visualisation tool", "A file transfer protocol"],
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
    o: ["An open-source storage layer that adds ACID transactions, schema enforcement and time travel to Parquet files in a data lake", "A relational database service on Azure", "A dashboard type in Power BI", "A redundancy option for Azure Storage"],
    a: [0],
    e: "Delta Lake stores data as Parquet files with a transaction log, enabling ACID transactions, updates and deletes, schema enforcement and querying previous versions (time travel). It is the default table format in Microsoft Fabric and Databricks."
  },
  {
    q: "What is Microsoft Fabric?",
    o: ["An end-to-end SaaS analytics platform that unifies data engineering, data warehousing, real-time analytics, data science and Power BI on a single data lake called OneLake", "A NoSQL database for global applications", "A virtual network appliance", "A replacement for Azure Storage accounts used by virtual machines"],
    a: [0],
    e: "Microsoft Fabric is a software-as-a-service analytics platform. All workloads (Data Factory, Data Engineering, Data Warehouse, Data Science, Real-Time Intelligence, Databases and Power BI) share one data lake, OneLake, and one capacity-based licensing model."
  },
  {
    q: "What is OneLake in Microsoft Fabric?",
    o: ["A single, unified, logical data lake for the whole organisation, automatically provisioned with every Fabric tenant", "A separate Azure Storage account that each user must create", "A Power BI visual", "A relational database engine"],
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
    o: ["Organising data into bronze (raw), silver (cleansed) and gold (business-ready) layers", "Storing data in three different Azure regions", "Using three types of Power BI visual", "Granting gold, silver and bronze permission levels to users"],
    a: [0],
    e: "The medallion architecture progressively improves data quality: bronze holds raw ingested data, silver holds validated and conformed data, and gold holds aggregated, business-level tables ready for reporting."
  },
  {
    q: "How is Microsoft Fabric licensed and paid for?",
    o: ["By purchasing capacity (measured in capacity units, F SKUs) shared by all Fabric workloads, plus per-user Power BI licences where needed", "By paying separately for each virtual machine", "By Request Units per second", "By DTUs per database"],
    a: [0],
    e: "Fabric uses capacities (F SKUs) measured in capacity units (CUs). All workloads consume from the same capacity. Power BI Pro or Premium Per User licences may still be needed to share content, depending on capacity size."
  },
  {
    q: "Which TWO statements describe a data warehouse compared with a data lake? (Choose two.)",
    o: ["A data warehouse stores data in a relational schema optimised for querying", "A data warehouse usually holds cleaned, structured data", "A data warehouse stores raw files in any format", "A data warehouse cannot be queried with SQL"],
    a: [0, 1],
    e: "Data warehouses hold structured, cleansed data in relational schemas (often star schemas) and are queried with SQL. Raw files in any format describe a data lake."
  },
  {
    q: "Which Azure service is a fully managed, real-time analytics engine that uses SQL-like queries to process streaming data from sources like Event Hubs and IoT Hub?",
    o: ["Azure Stream Analytics", "Azure Data Factory", "Azure Synapse dedicated SQL pool", "Azure Files"],
    a: [0],
    e: "Azure Stream Analytics runs continuous queries, written in a SQL-like language, over streaming input and sends results to outputs such as Power BI, Azure SQL, Blob Storage or Cosmos DB."
  },
  {
    q: "An Azure Stream Analytics job consists of which three main parts? (Choose three.)",
    o: ["Input", "Query", "Output", "Linked service"],
    a: [0, 1, 2],
    e: "A Stream Analytics job reads from one or more inputs (such as Event Hubs, IoT Hub or Blob Storage), transforms data with a query, and writes to one or more outputs. Linked services are a Data Factory concept."
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
    o: ["Kusto Query Language (KQL)", "DAX", "MDX", "Cypher"],
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
    o: ["Azure Stream Analytics", "Spark Structured Streaming in Azure Databricks", "Azure Data Box", "Azure Files"],
    a: [0, 1],
    e: "Stream Analytics and Spark Structured Streaming (in Databricks, Synapse or Fabric) both process data streams continuously. Data Box is offline data transfer, and Azure Files provides file shares."
  },
  {
    q: "Which describes the purpose of Power BI?",
    o: ["A collection of software services, apps and connectors to turn data from many sources into interactive visual insights", "A NoSQL database", "A data integration service that copies data between stores", "A virtual machine hosting service"],
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
    o: ["Build reports in Power BI Desktop, publish them to the Power BI service, then share and view them in the service and mobile apps", "Build reports on a phone, then export them to Excel", "Create dashboards in Azure Data Factory, then import them into Power BI", "Write DAX in SQL Server Management Studio"],
    a: [0],
    e: "The common flow is: connect to and model data in Desktop, publish to a workspace in the Power BI service, then pin visuals to dashboards and share reports or apps with users on the web and mobile."
  },
  {
    q: "What is the difference between a Power BI report and a Power BI dashboard?",
    o: ["A report can have multiple pages of interactive visuals from one semantic model; a dashboard is a single-page canvas of tiles pinned from one or more reports", "A dashboard can have many pages while a report has only one", "Reports can only be created on mobile devices", "There is no difference"],
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
    o: ["DAX (Data Analysis Expressions)", "M", "KQL", "T-SQL"],
    a: [0],
    e: "DAX is the formula language for Power BI, Analysis Services and Power Pivot. It is used for measures like `Total Sales = SUM(Sales[Amount])`, calculated columns and calculated tables. M is the Power Query language."
  },
  {
    q: "In Power BI, what is a measure?",
    o: ["A calculation, such as a sum or average, that is evaluated at query time based on the current filter context", "A column imported directly from the source", "A type of chart", "A data source connection"],
    a: [0],
    e: "Measures are DAX calculations evaluated dynamically depending on filters and slicers in a visual, so the same 'Total Sales' measure shows different values by region, product or year."
  },
  {
    q: "In a Power BI data model, what is the purpose of a relationship between tables?",
    o: ["It lets filters on one table, such as Product, flow to related tables, such as Sales, so data can be analysed across tables", "It encrypts the data", "It defines how often data refreshes", "It sets the colour of visuals"],
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
    o: ["The data model with tables, relationships, measures and metadata that reports are built on", "A single chart", "A Power BI dashboard tile", "A paginated report"],
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
    o: ["Bar or column chart", "Line chart", "Card", "Gauge"],
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
    o: ["Gauge or KPI visual", "Scatter chart", "Map", "Matrix"],
    a: [0],
    e: "Gauges show a value on a circular scale with an optional target, and KPI visuals show a value, its target and trend. Both are designed for goal tracking."
  },
  {
    q: "Which visual is most appropriate to show sales by country on a geographic map?",
    o: ["Map or filled map (choropleth)", "Line chart", "Card", "Waterfall chart"],
    a: [0],
    e: "Map visuals plot data by location, and filled maps shade regions by value. They make geographic patterns easy to spot."
  },
  {
    q: "Which TWO are features of Power BI reports? (Choose two.)",
    o: ["Interactive visuals that cross-filter each other", "Multiple pages", "Support for writing data back to the source database by default", "They can only be viewed on Windows"],
    a: [0, 1],
    e: "Reports can have many pages, and selecting a data point in one visual cross-filters or cross-highlights others. Reports are read-only analytics by default and can be viewed in browsers and mobile apps."
  },
  {
    q: "Which Power BI feature lets users ask questions about their data in natural language, such as 'total sales by region last year'?",
    o: ["Q&A (and Copilot in Power BI)", "Power Query", "Row-level security", "Gateways"],
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
    o: ["A container for collaborating on and storing dashboards, reports, semantic models and other items", "A physical server", "A type of chart", "A DAX function"],
    a: [0],
    e: "Workspaces hold related content and are where teams collaborate, with roles such as Admin, Member, Contributor and Viewer. In Fabric, workspaces also contain lakehouses, warehouses, notebooks and pipelines."
  },
  {
    q: "Which TWO are typical steps a data analyst takes in Power BI? (Choose two.)",
    o: ["Prepare and transform data with Power Query", "Model data and create DAX measures", "Configure database backups", "Install the operating system on a server"],
    a: [0, 1],
    e: "Analysts prepare, model, visualise and analyse data. Backups and OS installation are administrator tasks."
  },
  {
    q: "Which TWO elements are part of a typical large-scale analytics architecture on Azure? (Choose two.)",
    o: ["Data ingestion and processing (for example, Data Factory pipelines and Spark)", "Analytical data store (for example, a data lake, lakehouse or data warehouse)", "A spreadsheet emailed between users as the only data store", "An OLTP database with no other components"],
    a: [0, 1],
    e: "Large-scale analytics usually includes ingestion/ETL, an analytical store (lake, lakehouse or warehouse), an optional modelling layer, and visualisation such as Power BI."
  },
  {
    q: "Which TWO are valid ways to ingest data in Microsoft Fabric? (Choose two.)",
    o: ["Data pipelines (Data Factory in Fabric)", "Dataflows Gen2 using Power Query", "Azure Data Box only", "Manually typing data into a Power BI dashboard"],
    a: [0, 1],
    e: "Fabric Data Factory includes pipelines for orchestration and copying, and Dataflows Gen2 for low-code Power Query transformations. Notebooks, eventstreams, mirroring and shortcuts are other ingestion options."
  },
  {
    q: "What is a Dataflow Gen2 in Microsoft Fabric?",
    o: ["A low-code tool that uses Power Query Online to ingest and transform data and load it into a destination such as a lakehouse or warehouse", "A streaming engine for IoT data", "A relational database", "A Spark notebook"],
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
    o: ["Nightly loading of sales data into a data warehouse", "Recalculating monthly customer segments from historical data", "Triggering an alert within one second when a sensor exceeds a threshold", "Displaying stock prices that update every second"],
    a: [0, 1],
    e: "Nightly loads and monthly recalculations work on bounded datasets on a schedule, which makes them batch. Sub-second alerts and live tickers require stream processing."
  },
  {
    q: "Which describes the 'lambda' or 'hot and cold path' approach to analytics?",
    o: ["Combining real-time stream processing (hot path) with batch processing of historical data (cold path)", "Processing data only once per year", "Storing data in two separate Power BI dashboards", "Using only serverless databases"],
    a: [0],
    e: "Many architectures process streaming data for immediate insights while also storing all data for batch analysis. Results from both paths can be combined for complete reporting."
  },
  {
    q: "Which Azure service would you use to orchestrate copying data from 50 SaaS and on-premises sources into a data lake on a nightly schedule?",
    o: ["Azure Data Factory (or Data Factory in Microsoft Fabric)", "Azure Stream Analytics", "Power BI Desktop", "Azure Cosmos DB"],
    a: [0],
    e: "Data Factory's connectors, pipelines, triggers and monitoring are designed for orchestrated, scheduled batch ingestion from many sources."
  },
  {
    q: "Which statement about Azure Synapse Analytics dedicated SQL pools is correct?",
    o: ["Compute can be paused when not in use to save costs, while storage continues to be billed", "They only support NoSQL queries", "They charge only per TB scanned by each query", "They cannot store relational tables"],
    a: [0],
    e: "Dedicated SQL pools can be paused, which stops compute billing; storage is still charged. Per-TB billing applies to serverless SQL pools."
  },
  {
    q: "What does MPP (massively parallel processing) mean in the context of a data warehouse?",
    o: ["Queries are split across many compute nodes that process portions of the data in parallel", "Each query runs on a single CPU core", "Data is stored only in memory", "Multiple users cannot run queries at the same time"],
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
    o: ["Row-level security (RLS)", "Slicers", "Bookmarks", "Q&A"],
    a: [0],
    e: "Row-level security uses DAX filter roles on the semantic model. Users assigned to a role only see rows matching that role's filters, wherever they view the report."
  },
  {
    q: "Which TWO statements about Azure Stream Analytics are correct? (Choose two.)",
    o: ["It uses a SQL-like query language", "It can output results directly to Power BI for real-time dashboards", "It is primarily a tool for designing star schemas", "It requires you to manage your own Spark cluster"],
    a: [0, 1],
    e: "Stream Analytics jobs are written in a SQL-like language and can output to Power BI, SQL, storage, Cosmos DB and more. It's fully managed with no cluster management."
  },
  {
    q: "You need to calculate the average temperature reported by each sensor every 5 minutes, with each event counted in exactly one interval. Which Stream Analytics function is most appropriate?",
    o: ["TumblingWindow(minute, 5)", "HoppingWindow(minute, 10, 5)", "SessionWindow(minute, 5, 10)", "SlidingWindow(minute, 5)"],
    a: [0],
    e: "Tumbling windows produce non-overlapping, back-to-back intervals, so each event falls in exactly one 5-minute bucket. A typical query is `SELECT DeviceId, AVG(Temp) FROM input GROUP BY DeviceId, TumblingWindow(minute, 5)`."
  },
  {
    q: "Which component in a real-time analytics architecture acts as a buffer that receives high-volume events from producers and lets multiple consumers read them independently?",
    o: ["An event broker such as Azure Event Hubs", "A Power BI dashboard", "A relational database primary key", "A Blob Storage access tier"],
    a: [0],
    e: "Event brokers like Event Hubs (or Kafka) decouple producers from consumers, buffer events durably for a retention period, and support partitions and consumer groups so multiple applications can read the same stream."
  },
  {
    q: "Which TWO are outputs commonly used for streaming data processed by Azure Stream Analytics? (Choose two.)",
    o: ["Power BI (real-time dashboard)", "Azure Data Lake Storage (for later batch analysis)", "Azure Data Box", "On-premises tape backup"],
    a: [0, 1],
    e: "Stream Analytics can send results to Power BI for live visuals and to storage such as Data Lake Storage, SQL or Cosmos DB for persistence. Data Box is an offline transfer device."
  },
  {
    q: "Which Microsoft Fabric experience is aimed at data scientists for building and training machine learning models with notebooks and MLflow experiment tracking?",
    o: ["Data Science", "Real-Time Intelligence", "Data Warehouse", "Power BI"],
    a: [0],
    e: "Fabric Data Science provides notebooks, experiments, ML models and integration with MLflow and SynapseML, using data from OneLake."
  },
  {
    q: "Which language would a data engineer use to write code that transforms data in a Microsoft Fabric lakehouse notebook?",
    o: ["PySpark (Python), Spark SQL, Scala or R", "DAX only", "M only", "HTML"],
    a: [0],
    e: "Fabric notebooks run on Apache Spark and support PySpark, Spark SQL, Scala and SparkR. DAX is for semantic models, and M is used in Power Query/Dataflows."
  },
  {
    q: "In a Microsoft Fabric lakehouse, in which format are managed tables stored?",
    o: ["Delta Lake (Parquet files with a transaction log)", "CSV", "XML", "Excel workbooks"],
    a: [0],
    e: "Fabric standardises on Delta Lake, so tables written by Spark, the Warehouse, Dataflows or pipelines are all Delta tables in OneLake that every Fabric engine can read."
  },
  {
    q: "Which statement best describes the relationship between Azure Synapse Analytics and Microsoft Fabric?",
    o: ["Fabric is a SaaS platform that delivers the next generation of Synapse capabilities (data engineering, warehousing, real-time analytics) alongside Power BI on OneLake", "Fabric is a NoSQL database that replaces Cosmos DB", "Synapse is required to use Fabric", "They are unrelated services"],
    a: [0],
    e: "Microsoft Fabric evolves the Synapse experiences into an integrated SaaS platform with shared storage (OneLake) and capacity. Synapse remains available as a PaaS service but Fabric is the strategic direction."
  },
  {
    q: "Which of the following is an example of a fact in a sales analytics model?",
    o: ["SalesAmount for an order line", "Customer city", "Product colour", "Store manager name"],
    a: [0],
    e: "Facts are numeric measures of business events, such as SalesAmount and Quantity. City, colour and manager name are descriptive attributes stored in dimension tables."
  },
  {
    q: "Which TWO statements about a Power BI dashboard are correct? (Choose two.)",
    o: ["It can contain tiles pinned from multiple reports", "It is created in the Power BI service, not in Power BI Desktop", "It can have multiple pages", "It is the same as a Power BI semantic model"],
    a: [0, 1],
    e: "Dashboards are single-page canvases built in the Power BI service by pinning tiles from one or more reports. Multi-page content is a report, and the semantic model is the underlying data model."
  },
  {
    q: "Which Power BI visual best shows each category's contribution to a whole when there are only a few categories?",
    o: ["Pie or donut chart", "Line chart", "Scatter chart", "Card"],
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
    o: ["Building pipelines that load data into a lakehouse", "Designing the bronze, silver and gold layers of a data lake", "Approving the company's annual budget", "Formatting visuals for executive presentations"],
    a: [0, 1],
    e: "Data engineers design and build ingestion pipelines and data architectures such as medallion layers. Visual formatting is typically a data analyst task."
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
    o: ["IoT Hub or Event Hubs → Stream Analytics (or Fabric eventstream) → real-time dashboard", "Data Factory nightly pipeline → Excel workbook", "Azure Files share → paginated report", "Azure Data Box → Azure SQL Database"],
    a: [0],
    e: "Real-time requirements call for streaming ingestion (IoT Hub/Event Hubs), stream processing (Stream Analytics or Fabric Real-Time Intelligence) and a dashboard that updates continuously. Nightly pipelines and Data Box are batch or offline approaches."
  },
  {
    q: "What is the purpose of a data model, such as a semantic model or OLAP cube, in an analytics solution?",
    o: ["To organise data into a structure of measures and dimensions that makes it easy and fast for analysts to query and visualise", "To store raw files from the source system", "To capture new transactions", "To encrypt the data warehouse"],
    a: [0],
    e: "Analytical models present data in business terms (facts, measures, dimensions, hierarchies) and often pre-aggregate it, so users can explore data quickly without knowing the underlying table structures."
  },
  {
    q: "Which Power BI capability allows a report author to define a calculation once, for example 'Profit Margin', and reuse it in any visual?",
    o: ["Creating a measure in the semantic model", "Adding a text box", "Creating a bookmark", "Adding a slicer"],
    a: [0],
    e: "Measures defined in the model are reusable across visuals and reports, and they respond to filter context. This keeps calculation logic consistent."
  },
  {
    q: "Which TWO statements about Power BI on mobile devices are correct? (Choose two.)",
    o: ["Power BI mobile apps let users view and interact with reports and dashboards on iOS and Android", "Report authors can create mobile-optimised layouts for report pages", "Reports must be completely rebuilt in a separate tool for mobile", "Mobile apps are only for editing DAX"],
    a: [0, 1],
    e: "Power BI mobile apps display published content, and authors can design a mobile layout for each report page in Power BI Desktop. No separate tool is needed."
  },
  {
    q: "Which Azure service acts as a fully managed Apache Kafka-compatible endpoint, so Kafka producers can send events without running a Kafka cluster?",
    o: ["Azure Event Hubs", "Azure Queue storage", "Azure Synapse dedicated SQL pool", "Azure Data Explorer"],
    a: [0],
    e: "Event Hubs provides a Kafka endpoint, so existing Kafka clients can connect by changing configuration, without managing brokers or ZooKeeper. HDInsight can also host Kafka clusters if full control is needed."
  },
  {
    q: "Which describes 'data at rest' versus 'data in motion' in analytics?",
    o: ["Data at rest is stored and typically processed in batches; data in motion is streaming and processed as it flows", "Data at rest is always encrypted; data in motion never is", "Data at rest is unstructured; data in motion is structured", "There is no difference"],
    a: [0],
    e: "Batch analytics usually works on stored data (at rest), while stream analytics processes events as they arrive (in motion). Both can be encrypted, and both can be structured or not."
  },
  {
    q: "Which TWO are benefits of using Microsoft Fabric for analytics? (Choose two.)",
    o: ["A single copy of data in OneLake can be used by Spark, SQL, KQL and Power BI engines", "Unified governance, security and capacity management across workloads", "Each workload requires its own separate data copy and billing model", "It only supports on-premises deployment"],
    a: [0, 1],
    e: "Fabric's open Delta format in OneLake lets many engines read the same data, reducing duplication, and the SaaS platform centralises governance (with Purview integration) and capacity. It's a cloud SaaS service."
  },
  {
    q: "A data analyst needs to combine data from an Excel file, a SharePoint list and an Azure SQL Database into one Power BI report. What does Power BI support?",
    o: ["Connecting to multiple sources in one model and creating relationships between them", "Only one data source per report", "Only Microsoft Excel as a data source", "Only data stored in Azure Cosmos DB"],
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
    o: ["Copies data from a source data store to a sink data store, optionally converting formats", "Creates a Power BI dashboard", "Backs up a virtual machine", "Encrypts a database"],
    a: [0],
    e: "The Copy activity moves data between supported stores (for example, from on-premises SQL Server to Data Lake Storage as Parquet) and can map columns and convert formats."
  },
  {
    q: "Which TWO statements describe Azure Data Explorer? (Choose two.)",
    o: ["It is optimised for log and time-series analytics over large volumes of data", "It uses the Kusto Query Language (KQL)", "It is primarily used to store virtual machine disks", "It is a relational OLTP database for order processing"],
    a: [0, 1],
    e: "Azure Data Explorer ingests large volumes of telemetry and logs and queries them quickly with KQL. It is not for VM disks or transactional order processing."
  },
  {
    q: "Which TWO are typical sources of streaming data? (Choose two.)",
    o: ["IoT sensors sending readings every second", "Clickstream events from a website", "A yearly financial report in PDF", "A backup tape stored offsite"],
    a: [0, 1],
    e: "Streaming data is continuous and time-ordered, such as sensor telemetry, clickstreams, application logs and financial ticks. PDFs and backup tapes are static data."
  },
  {
    q: "Which Power BI feature lets you share a packaged collection of reports and dashboards with a large audience in a read-only, easy-to-navigate form?",
    o: ["Power BI app", "Power Query", "Power BI Desktop file (.pbix) via email", "Gateway"],
    a: [0],
    e: "Workspace content can be published as a Power BI app for consumers. Apps provide navigation, audience-based permissions and a stable published version separate from work in progress."
  }
]);
