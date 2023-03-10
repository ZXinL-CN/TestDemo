# 元数据管理子系统

> Atlas

> 定位、角色、业务流程、功能架构、子系统关系

## 元数据管理子系统需求及业务目标
- **子系统定位**

是数据中台重要子系统，作为数据开发、数据服务和数据治理的`基础组件`，提供`元模型定义、元数据采集、元数据维护、元数据查询`以及分析一系列与元数据有关的服务，为周边子系统提供元数据相关的接口。

- **主要功能需求**
    - 通过高兼容、可扩展`元模型管理`，满足多种类型元数据的统一存储；
    - 通过轻量级的元数据采集代理与适配器，实现元数据的自动化采集和手动采集；
    - 通过高性能的元数据计算引擎，构建多种`元数据应用`，提供元数据查询、分析、导出等多种应用；
    -通过统一元数据接口服务，为中台相关子系统提供标准化服务
    - 支出元数据补录，权限管理，版本管理
- **所属能力中心**
    - 数据资产管控中心
- **主要用户群体**
    - 元数据管理用户
    - 数据标准管理用户
    - 数据安全管理用户
    - 数据开发用户
    - 系统开发用户
- **主要关联系统**
    - 离线开发子系统
    - 实时开发子系统
    - 数据汇集子系统
    - 数据治理子系统
    - 数据资产管理子系统
    - 平台/系统监控管理子系统

## 元数据子系统管理角色定义

#### 元数据建模角色

- 负责元模型的创建、配置和管理
- 负责模板的创建、配置和管理

#### 元数据采集角色

- 负责采集任务的创建、配置和管理
- 负责采集任务执行

#### 元数据访问角色

- 通过子系统界面查询元数据，并进行分析
- 通过 API访问元数据

#### 元数据审核角色

- 负责元数据模型和模板的变更审核
- 负责元数据的变更审核

#### 元数据维护角色

- 负责元数据对标、手动编辑、版本差异合并
- 负责元数据版本维护

#### 元数据系统管理角色

- 权限管理
- 系统配置管理



## 元数据管理子系统：元数据来源与分类

**元数据主要来源**

- 文件（技术、业务、管理）
  - PDM
  - DDL
  - DML
  - 结构化数据字典
  - 半结构化文件
  - 音视频文件
- 数据库（技术）
  - 源系统
    - 测试环境
    - 生产环境
  - 数据开发子系统
  - 实验区
  - 验证区
  - 生产区
- 智能分析（技术）
  - 数据特征
  - 元数据关系
- 数据标准（技术、业务、管理）
  - 技术属性
  - 业务属性
  - 管理属性

**按领域分类**

- 技术
  - 库表结构
  - 字段约束
  - 数据模型
  - 数据库细节
- 业务
  - 业务指标
  - 业务代码
  - 业务术语
- 管理
  - 数据所有者
  - 数据质量定责
  - 数据安全登记

## 元数据管理子系统：元数据版本规范

> 元数据采集  ===> 临时版  ===> 元数据内部版本  ===> 版本差异比较  ===> 合并  ===> 编辑  ===> 提交发布  ===> 元数据发布版本

同一数据可能会在生命周期内多次以不同形式采集元数据，每次都会有一定的变更。需要由元数据维护角色对版本之间的变更进行识别是否接受。

**优先原则：**

- 以发生变更的版本采集来源（文件、数据库、算法、标准）为依据；
- 以数据标准为优先，其次是已完成对标的文件，再次为数据库、又次为未对标的文件，最次为算法为参考优先级进行判定

