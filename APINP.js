const APIurl = "https://api.novaposhta.ua/v2.0/json/";
const apiKey = "";
let data = "";

function connectToApi(strData)
{
    console.log("fetch");
    fetch(APIurl, 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: strData
        })
    .then(res => res.json())
    .then(data => setTable(data));
}

function setTable({data})
{
    const tableContainer = document.getElementById("table-container");
    
    // Отримати кількість рядків і стовпців з масиву даних
    const rows = data.length;
    const columns = Object.keys(data[0]).length;
    
    // Створити таблицю і додати її до контейнера
    const table = document.createElement("table");
    tableContainer.appendChild(table);
    
    // Створити заголовок таблиці
    const tableHeader = document.createElement("thead");
    const tableHeaderRow = document.createElement("tr");
    
    // Додати заголовки стовпців до заголовка таблиці
    for (const key in data[0]) 
    {
        switch (key) 
        {
            case "Description":
                const tableHeaderCellDescUa = document.createElement("th");
                tableHeaderCellDescUa.textContent = "Опис українською мовою";
                tableHeaderRow.appendChild(tableHeaderCellDescUa);
                break;
            case "Ref":
                const tableHeaderCellRef = document.createElement("th");
                tableHeaderCellRef.textContent = "Ідентифікатор";
                tableHeaderRow.appendChild(tableHeaderCellRef);
                break;
            case "DescriptionRu":
                const tableHeaderCellDescRu = document.createElement("th");
                tableHeaderCellDescRu.textContent = "Опис російською мовою";
                tableHeaderRow.appendChild(tableHeaderCellDescRu);
                break;
            case "Weight":
                const tableHeaderCellW = document.createElement("th");
                tableHeaderCellW.textContent = "Вага";
                tableHeaderRow.appendChild(tableHeaderCellW);
                break;
            case "DescriptionType":
                const tableHeaderCellDescTy = document.createElement("th");
                tableHeaderCellDescTy.textContent = "Опис типу позиції Tires/Wheels";
                tableHeaderRow.appendChild(tableHeaderCellDescTy);
                break;
            case "Length":
                const tableHeaderCellL = document.createElement("th");
                tableHeaderCellL.textContent = "Довжина";
                tableHeaderRow.appendChild(tableHeaderCellL);
                break;
            case "Height":
                const tableHeaderCellH = document.createElement("th");
                tableHeaderCellH.textContent = "Висота";
                tableHeaderRow.appendChild(tableHeaderCellH);
                break;
            case "VolumetricWeight":
                const tableHeaderCellVW = document.createElement("th");
                tableHeaderCellVW.textContent = "Об'єм";
                tableHeaderRow.appendChild(tableHeaderCellVW);
                break;
            case "TypeOfPacking":
                break;
            case "PackagingForPlace":
                break;
            case "FullName":
                const tableHeaderCellFN = document.createElement("th");
                tableHeaderCellFN.textContent = "Найменування форми власності";
                tableHeaderRow.appendChild(tableHeaderCellFN);
                break;
            default:
                const tableHeaderCell = document.createElement("th");
                tableHeaderCell.textContent = key;
                tableHeaderRow.appendChild(tableHeaderCell);
                break;
        }
    }
    
    tableHeader.appendChild(tableHeaderRow);
    table.appendChild(tableHeader);
    
    // Створити тіло таблиці
    const tableBody = document.createElement("tbody");

    // Додати рядки з даними до тіла таблиці
    for (let i = 0; i < rows; i++) 
    {
        const tableBodyRow = document.createElement("tr");
    
        for (const key in data[i]) 
        {
            if(key == "PackagingForPlace" || key == "TypeOfPacking") 
            {
                continue;
            }
            const tableBodyCell = document.createElement("td");
            tableBodyCell.textContent = data[i][key];
            tableBodyRow.appendChild(tableBodyCell);
        }
    
        tableBody.appendChild(tableBodyRow);
    }
    
    table.appendChild(tableBody);

    const br = document.createElement("br");
}

function clearTable()
{
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";
}

function getCargoTypes()
{
    data = 
    {
        "apiKey": apiKey,
        "modelName": "Common",
        "calledMethod": "getCargoTypes",
        "methodProperties": {}
    }
    let strData = JSON.stringify(data);
    connectToApi(strData);
}

function getBackwardDeliveryCargoTypes()
{
    data = 
    {
        "apiKey": apiKey,
        "modelName": "Common",
        "calledMethod": "getBackwardDeliveryCargoTypes",
        "methodProperties": {   }
    }
    let strData = JSON.stringify(data);
    connectToApi(strData);
}

function getPalletsList()
{
    data = 
    {
        "apiKey": apiKey,
        "modelName": "Common",
        "calledMethod": "getPalletsList",
        "methodProperties": {   }
    }
    let strData = JSON.stringify(data);
    connectToApi(strData);
}

function getTypesOfPayersForRedelivery()
{
    data = 
    {
        "apiKey": apiKey,
        "modelName": "Common",
        "calledMethod": "getTypesOfPayersForRedelivery",
        "methodProperties": {   }
    }
    let strData = JSON.stringify(data);
    connectToApi(strData);
}

function getTiresWheelsList()
{
    data = 
    {
        "apiKey": apiKey,
        "modelName": "Common",
        "calledMethod": "getTiresWheelsList",
        "methodProperties": {   }
    }
    let strData = JSON.stringify(data);
    connectToApi(strData);
}

function getServiceTypes()
{
    data = 
    {
        "apiKey": apiKey,
        "modelName": "Common",
        "calledMethod": "getServiceTypes",
        "methodProperties": {   }
    }
    let strData = JSON.stringify(data);
    connectToApi(strData);
}

function getOwnershipFormsList()
{
    data = 
    {
        "apiKey": apiKey,
        "modelName": "Common",
        "calledMethod": "getOwnershipFormsList",
        "methodProperties": {   }
    }
    let strData = JSON.stringify(data);
    connectToApi(strData);
}

function getPackList()
{
    data = 
    {
        "apiKey": apiKey,
        "modelName": "Common",
        "calledMethod": "getPackList",
        "methodProperties": {   }
    }
    let strData = JSON.stringify(data);
    connectToApi(strData);
}

function getCargoDescriptionList()
{
    data = 
    {
        "apiKey": apiKey,
        "modelName": "Common",
        "calledMethod": "getCargoDescriptionList",
        "methodProperties": {   }
    }
    let strData = JSON.stringify(data);
    connectToApi(strData);
}