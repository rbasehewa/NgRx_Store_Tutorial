// action

const action = { type: 'Create_ITEM', payload: 'new-item'};

// action creator

create = (item) => ({ type: 'Create_ITEM', payload: item })

create('item1');
create('item2');
create('item3');
create('item4');