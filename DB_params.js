// my statement, can inject query to DB directly
var params = {
    query:
        {
        statement: `SELECT p.*
            FROM _DEVPL_sdvd_post AS p
            JOIN _DEVPL_dvr3_bookmark AS b
            WHERE b.user_id = 'user_uid' AND p.element_id = b.element_id
            LIMIT 10`
        }
    };

///////////////////////////////////////////////////
////////////////////// SELECT /////////////////////
///////////////////////////////////////////////////

// SELECT
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

// SELECT, LIMIT, ORDER
var params = {
    query: [
        {
        query: 'SELECT',
        table: 'post',
        limit: 10,
        where: {
            user_id: user_uid,
            private: type
        },
        order: {
            field: 'htb_x_id',
            sort: 'DESC'
        }
    }],
    env: 'dev',
    pluginId: "plugin-Example_pluginid"
};

// Multi query
var Multi_Query = {
    query: [{
            query: 'SELECT',
            table: 'follow',
            where: {
                target_user_id: user_uid,
                follow_status: 1
            }
        },
        {
            query: 'SELECT',
            table: 'follow',
            where: {
                user_id: user_uid,
                follow_status: 1
            }
        },
        {
            query: 'SELECT',
            table: 'follow',
            where: {
                user_id: bim.app.session().uid
            }
        }
    ],
    env: 'dev',
    pluginId: "plugin-Example_pluginid"
};

// Multi query res
bim.db.query(Multi_Query, function (res) {
    console.log(res[0].data);
    console.log(res[1].data);
    console.log(res[2].data);
});

// SELECT, LIMIT, ORDERBY
var params = {
    query:[
       {
           query: 'SELECT',
           table: 'post',
         orderby: 'DESC',
         limit: {
             start: 0,
             end: options.cols * options.rows
         },
         where: options.condition
       }
    ],
    env: 'dev',
    pluginId: "plugin-Example_pluginid"
   };


///////////////////////////////////////////////////
////////////////////// INSERT /////////////////////
///////////////////////////////////////////////////

// INSERT
var params = {
    query:[
       {
        query:  'INSERT',
        table: 'loginV2',
        rows:{
           email: formData.email,
           pass: formData.password,
           username: formData.username,
           uid: uuid,
           date: date,
           datetime: datetime,
           active: 1
        }
       }
    ],
    env: 'dev',
    pluginId: "plugin-EXAMPLEPLUGIN_ID"
   };

// INSERT IF NOT EXISTS | UPDATE

var params = {
    query: [
    {
        query: "INSERT IF NOT EXISTS | UPDATE",
        table: "follow",
        rows: {
        follow_status: 1,
        target_user_id: uid,
        user_id: bim.app.session().uid,
        },
        where: {
        target_user_id: uid,
        user_id: bim.app.session().uid,
        },
        set: {
        follow_status: 1,
        },
    },
    ],
    env: "dev",
    pluginId: "plugin-EXAMPLEPLUGIN_ID"
};

///////////////////////////////////////////////////
////////////////////// UPDATE /////////////////////
///////////////////////////////////////////////////

var params = {
    query: [
    {
        query: "UPDATE",
        table: "follow",
        rows: {
        follow_status: 0,
        },
        where: {
        user_id: bim.app.session().uid,
        target_user_id: uid,
        },
    },
    ],
    env: "dev",
    pluginId: "plugin-EXAMPLEPLUGIN_ID"
}

///////////////////////////////////////////////////
////////////////////// DELETE /////////////////////
///////////////////////////////////////////////////

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