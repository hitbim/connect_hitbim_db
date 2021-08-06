# HITBIM Plugin sample

## Introduction
This document aims to create the desired table in the HITBIM DB and make it available in the plugin.

## HITBIM DB Creating a table on a server
1. Login to [Hitbim](https://hitbim.com/).  

2. Click the '<>' button at the bottom left to navigate to the plugin dashboard.

![plot](./assets/1.png)  

3. Click the '+' button to create a new plugin.

4. When a new plugin is created, go to the Plugin Details page.

![plot](./assets/3.png)  

5. After you set the table name, uploade SQL file and it creates a DB table based on the contents of the file.
※ Setting the table name on the current web page also causes the table name to be determined by the name inside the uploaded SQL file.
![plot](./assets/4.png)    
Get the Plugin ID, Key value to work with the plugin.

## Connecting generated table with Plugins.
1. Change the value of the $B.init function in the plug-in token, pluginId from the main JS file to the Plugin ID, Key value obtained from above.

![plot](./assets/5.png)  

2. The connection with DB is finished! 

## Send queries and use data
Hitbim DB works in the following ways:

1. Define the query to use.
The pluginId value must be the plugin ID value obtained above, and the table value must be the table name generated above.

```
var param = {
    query:[
     {
      query:  'SELECT', // SELECT, INSERT, DELETE etc
      table: 'Table_name', // Table name
      where:{ // Where A and B
        condition1 : uid,
        condition2 : 'cond2'
      }
     }
    ],
    env: 'dev',
    pluginId:"plugin-Example_pluginid" // Plugin ID from website
};
```

2. bim.db.query sends a query through a function, and receives a response.

```
bim.db.query(params, function (res) { // get DB response by callback
    console.log(res[0].data)
});
```

## Query Example
email, pass, username, active : Column name

1. SELECT
```
var params = {
    query:[
        {
        query:  'SELECT',
        table: 'table_name',
        where: {
            email: email_val,
            pass: password_val,
            username: username_val
            },
        }
    ],
    env: 'dev',
    pluginId: "plugin-Example_pluginid"
};
```
2. INSERT  
```
var params = {
    query:[
       {
        query:  'INSERT',
        table: 'table_name',
        rows:{
           email: email_val,
           pass: password_val,
           username: username_val,
           active: 1
           }
        }
    ],
    env: 'dev',
    pluginId:"plugin-Example_pluginid"
};
```
3. UPDATE  
```
var params = {
    query: [{
        query: "UPDATE",
        table: "table_name",
        rows: {
            email: email_val,
        },
        where: {
            username: username_val,
            active: 1
            },
    }],
    env: "dev",
    pluginId:"plugin-Example_pluginid"
}
```
4. DELETE
```
var params = {
    query:[
        {
            query:  'DELETE',
            table: 'table_name',
            where:{
                user_id: userid_val,
                active: 1
            }
        }
    ],
    env: 'dev',
    pluginId: "plugin-Example_pluginid"
};
```
In addition, most queries such as JOIN, LIMIT, ORDERBY are available, please refer to the enclosed DB_params.js file to see the examples.
