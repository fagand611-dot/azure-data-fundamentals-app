/*
 * DP-900 skills outline (skills measured as of July 21, 2026) and the objective each question tests.
 * Every question id must appear under exactly one code; scripts/validate.js checks this.
 * X = topic not in the current outline; D = more detail than the outline asks for.
 * Questions tagged X or D stay available for practice but are left out of exam simulations.
 */
window.DP900.outline = {
  asOf: 'July 21, 2026',
  objectives: [
    ["1.1", "Describe ways to represent data: structured, semi-structured and unstructured"],
    ["1.2", "Describe common formats for data files"],
    ["1.3", "Describe features of common data stores, including databases"],
    ["1.4", "Identify Azure datastores for common use cases"],
    ["1.5", "Describe features of transactional workloads"],
    ["1.6", "Describe features of analytical workloads"],
    ["1.7", "Describe responsibilities of database administrators, data engineers and data analysts"],
    ["2.1", "Identify features of relational data"],
    ["2.2", "Describe normalization and why it is used"],
    ["2.3", "Identify common SQL statements"],
    ["2.4", "Identify common database objects"],
    ["2.5", "Describe the Azure SQL family: SQL Database, SQL Managed Instance, SQL Server on VMs"],
    ["2.6", "Identify Azure database services for open-source database systems"],
    ["3.1", "Describe features of Azure Blob storage"],
    ["3.2", "Describe features of Azure Files"],
    ["3.3", "Describe features of Azure Table storage"],
    ["3.4", "Identify use cases for Azure Cosmos DB"],
    ["3.5", "Describe Azure Cosmos DB APIs"],
    ["4.1", "Describe considerations for data ingestion and processing"],
    ["4.2", "Describe options for analytical data stores"],
    ["4.3", "Describe Microsoft cloud services for large-scale analytics, including Azure Databricks and Microsoft Fabric"],
    ["4.4", "Describe the difference between batch and streaming data"],
    ["4.5", "Identify Microsoft cloud services for real-time analytics"],
    ["4.6", "Identify the capabilities of Power BI"],
    ["4.7", "Describe features of data models in Power BI"],
    ["4.8", "Identify appropriate visualizations for data"]
  ],
  extra: {
    X: 'Not in the current skills outline',
    D: 'More detail than the exam outline asks for'
  },
  byObjective: {
    '1.1': ("core-001 core-002 core-003 core-082 core-088 core-094 core-095 core-096 " +
      "core-109 core-123 core-143 core-144 core-145 core-146").split(' '),
    '1.2': ("core-004 core-005 core-006 core-007 core-008 core-009 core-069 core-091 " +
      "core-107 core-110 core-119 core-127").split(' '),
    '1.3': ("core-010 core-011 core-012 core-013 core-048 core-049 core-050 core-051 " +
      "core-064 core-067 core-068 core-087 core-099 core-104 core-105 core-112 " +
      "core-113 core-122 core-124 core-147 core-148 core-149 core-157 core-163").split(' '),
    '1.4': ("core-066 core-071 core-131 core-132 core-133 core-134 core-135 core-136 " +
      "core-137 core-138 core-139 core-140 core-141 core-142 core-158 core-159 " +
      "nrel-089 nrel-100").split(' '),
    '1.5': ("core-014 core-016 core-017 core-018 core-019 core-020 core-058 core-065 " +
      "core-081 core-101 core-108 core-120 core-128 core-150 core-151 core-162").split(' '),
    '1.6': ("core-015 core-054 core-055 core-056 core-057 core-059 core-073 core-074 " +
      "core-075 core-102 core-117 core-130 core-152 core-153 core-160 core-161").split(' '),
    '1.7': ("core-034 core-035 core-036 core-037 core-070 core-090 core-115 core-116 " +
      "core-121 core-125 core-154 core-155 core-156 ana-065 ana-089").split(' '),
    '2.1': ("core-022 core-023 core-072 core-111 rel-063 rel-064 rel-065 rel-066 " +
      "rel-095 rel-121 rel-124 rel-125 rel-126").split(' '),
    '2.2': ("core-021 core-093 rel-043 rel-098 rel-113 rel-127 rel-128 rel-129 " +
      "rel-130 rel-131 rel-137 rel-138").split(' '),
    '2.3': ("core-024 core-025 core-026 core-027 core-028 core-029 core-076 core-077 " +
      "core-078 core-079 core-080 core-092 core-097 rel-037 rel-038 rel-039 " +
      "rel-040 rel-041 rel-042 rel-091 rel-099 rel-100 rel-101 rel-109 " +
      "rel-111 rel-117 rel-123 rel-132 rel-133 rel-134").split(' '),
    '2.4': ("core-030 core-031 core-032 core-033 rel-044 rel-045 rel-067 rel-075 " +
      "rel-076 rel-105 rel-107 rel-115 rel-118 rel-135 rel-136").split(' '),
    '2.5': ("rel-001 rel-002 rel-003 rel-004 rel-005 rel-006 rel-007 rel-008 " +
      "rel-009 rel-010 rel-011 rel-016 rel-017 rel-018 rel-019 rel-020 " +
      "rel-021 rel-022 rel-023 rel-024 rel-027 rel-028 rel-029 rel-030 " +
      "rel-033 rel-035 rel-036 rel-049 rel-050 rel-055 rel-056 rel-057 " +
      "rel-058 rel-059 rel-060 rel-061 rel-062 rel-069 rel-070 rel-072 " +
      "rel-074 rel-077 rel-078 rel-079 rel-080 rel-081 rel-082 rel-084 " +
      "rel-085 rel-086 rel-087 rel-088 rel-089 rel-090 rel-092 rel-093 " +
      "rel-102 rel-106 rel-108 rel-112 rel-116 rel-119 rel-122 rel-139 " +
      "rel-140 rel-141 rel-142 rel-143 rel-144 rel-145").split(' '),
    '2.6': ("rel-012 rel-013 rel-014 rel-015 rel-051 rel-052 rel-068 rel-083 " +
      "rel-104 rel-114 rel-120 rel-146").split(' '),
    '3.1': ("nrel-001 nrel-002 nrel-003 nrel-004 nrel-005 nrel-006 nrel-007 nrel-008 " +
      "nrel-009 nrel-010 nrel-011 nrel-012 nrel-013 nrel-021 nrel-022 nrel-023 " +
      "nrel-048 nrel-049 nrel-050 nrel-060 nrel-061 nrel-063 nrel-067 nrel-068 " +
      "nrel-069 nrel-073 nrel-075 nrel-078 nrel-081 nrel-083 nrel-084 nrel-087 " +
      "nrel-091 nrel-096 nrel-102 nrel-104 nrel-106 nrel-107 nrel-126 nrel-127").split(' '),
    '3.2': ("nrel-014 nrel-015 nrel-016 nrel-071 nrel-077 nrel-094 nrel-097 nrel-108 " +
      "nrel-109 nrel-110 nrel-111 nrel-112").split(' '),
    '3.3': ("nrel-017 nrel-018 nrel-019 nrel-020 nrel-057 nrel-066 nrel-072 nrel-085 " +
      "nrel-099 nrel-113 nrel-114 nrel-115 nrel-116 nrel-128").split(' '),
    '3.4': ("nrel-024 nrel-031 nrel-032 nrel-033 nrel-034 nrel-035 nrel-037 nrel-038 " +
      "nrel-039 nrel-040 nrel-042 nrel-043 nrel-044 nrel-045 nrel-046 nrel-054 " +
      "nrel-055 nrel-056 nrel-059 nrel-062 nrel-065 nrel-070 nrel-074 nrel-086 " +
      "nrel-090 nrel-095 nrel-098 nrel-103 nrel-105 nrel-123 nrel-124 nrel-125").split(' '),
    '3.5': ("nrel-025 nrel-026 nrel-027 nrel-028 nrel-029 nrel-030 nrel-064 nrel-076 " +
      "nrel-079 nrel-088 nrel-101 nrel-117 nrel-118 nrel-119 nrel-120 nrel-121 " +
      "nrel-122").split(' '),
    '4.1': ("core-052 core-053 core-084 core-086 core-114 ana-001 ana-002 ana-003 " +
      "ana-004 ana-008 ana-013 ana-066 ana-067 ana-068 ana-072 ana-082 " +
      "ana-100 ana-101 ana-111 ana-113 ana-119 ana-133 ana-153 ana-165 " +
      "ana-166 ana-167 ana-168").split(' '),
    '4.2': ("ana-016 ana-021 ana-022 ana-023 ana-025 ana-074 ana-083 ana-085 " +
      "ana-091 ana-107 ana-114 ana-120 ana-131 ana-137 ana-139 ana-147 " +
      "ana-169 ana-170").split(' '),
    '4.3': ("ana-009 ana-010 ana-011 ana-012 ana-014 ana-015 ana-017 ana-018 " +
      "ana-019 ana-020 ana-024 ana-069 ana-073 ana-075 ana-081 ana-084 " +
      "ana-090 ana-098 ana-108 ana-117 ana-141 ana-144 ana-145 ana-150 " +
      "ana-157 ana-158 ana-159 ana-160 ana-161 ana-162 ana-163 ana-164 " +
      "ana-171 ana-172 ana-173 ana-174").split(' '),
    '4.4': ("core-043 core-044 core-045 core-046 core-047 core-063 core-089 core-098 " +
      "core-103 core-106 core-129 ana-070 ana-071 ana-097 ana-103 ana-142 " +
      "ana-176").split(' '),
    '4.5': ("ana-026 ana-027 ana-028 ana-029 ana-033 ana-034 ana-035 ana-036 " +
      "ana-037 ana-038 ana-077 ana-079 ana-080 ana-092 ana-096 ana-102 " +
      "ana-106 ana-116 ana-129 ana-132 ana-136 ana-140 ana-152 ana-175").split(' '),
    '4.6': ("core-083 ana-039 ana-040 ana-041 ana-042 ana-043 ana-054 ana-057 " +
      "ana-058 ana-059 ana-063 ana-064 ana-076 ana-086 ana-095 ana-104 " +
      "ana-105 ana-110 ana-124 ana-130 ana-135 ana-149 ana-151 ana-177").split(' '),
    '4.7': ("ana-044 ana-045 ana-046 ana-047 ana-048 ana-060 ana-061 ana-062 " +
      "ana-093 ana-094 ana-099 ana-112 ana-121 ana-122 ana-123 ana-134 " +
      "ana-143").split(' '),
    '4.8': ("ana-049 ana-050 ana-051 ana-052 ana-053 ana-055 ana-056 ana-087 " +
      "ana-088 ana-115 ana-125 ana-146 ana-154 ana-155 ana-156").split(' '),
    'D': ("rel-025 rel-026 rel-031 rel-032 rel-034 rel-046 rel-047 rel-048 " +
      "rel-054 rel-071 rel-073 rel-094 rel-096 rel-097 rel-103 rel-110 " +
      "nrel-036 nrel-041 nrel-047 nrel-051 nrel-052 nrel-053 nrel-080 nrel-082 " +
      "nrel-092 nrel-093 ana-005 ana-006 ana-007 ana-030 ana-031 ana-032 " +
      "ana-078 ana-109 ana-118 ana-126 ana-127 ana-128 ana-138 ana-148").split(' '),
    'X': ("core-038 core-039 core-040 core-041 core-042 core-060 core-061 core-062 " +
      "core-085 core-100 core-118 core-126 rel-053 nrel-058 nrel-129 nrel-130 " +
      "nrel-131 ana-178 ana-179 ana-180 ana-181 ana-182").split(' ')
  }
};
