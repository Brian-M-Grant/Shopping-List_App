const port = 3000;
const { mongoose } = require('./db/mongoose')
const express = require('express');
const app = express();
const { list, task } = require('./db/models/index')
const bodyParser = require('body-parser')


/* Route Handlers*/

app.get('/list', (req, res) => {
    //Get list from database
    list.find({}).then((lists) => {
        res.send(lists);
    })



})

app.post('/list', (req, res) => {
    //Create a new list
    let List = new list({ title: req.body.title });
    List.save().then((newListDoc) => {
        res.send(newListDoc);
    })

    // const title = req.body.title;
    // const newList = new list((title));
    // newList.save().then((listDoc) => {
    //         res.send(listDoc);
    //     })
    //     // let time = new list(req.body);
    // title = "Yes"


    // time.save().then((newDoc) => {
    //         res.send(newDoc)
    //     })
    // let title = req.body.title;
    // let newList = new list({ title });
    // newList.save().then((listDoc) => {
    //     res.send(listDoc);
    // })
})

app.patch('/list:id', (req, res) => {
    //Will be used to update list
    list.findOne({ id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200)
    })
})
app.delete('/list/:id', (req, res) => {
    //Delete a specific list item
    list.findByIdAndRemove({
        _id: req.params.id
    }).then((removedItem) => {
        res.send(removedItem)
    })
})
app.get('/list/:listId/tasks', (req, res) => {
    task.find({ _listId: req.params.listId }).then((task) => {
        res.send(task)
    })
});

app.post('/list/:listId/tasks', (req, res) => {
    let newTask = new task({
        title: req.body.title
    });
    newTask.save().then((newTaskDoc) => {
        res.send(newTaskDoc);
    })
});

app.patch('/list/:listId/task/:taskId', (req, res) => {
    task.findOneAndUpdate({
        _id: req.params.taskId,
        _listId: req.params.listId
    }, {
        $set: req.body
    }.then(() => {
        res.sendStatus(200)
    }))
})
app.delete('/list/:listId/:task/taskId', (req, res) => {
    task.findByIdAndRemove({
        _id: req.params.taskId,
        _listId: req.params.listId
    }).then((removeTaskDoc) => {
        res.send(removeTaskDoc)

    })
})
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Listening on ${port}..`)
})