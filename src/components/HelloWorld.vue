<template>
  <div class="hello">
    <p class="taskhead">Pizza Task</p>
    <table class="table table-hover">
      <thead>
      <tr>
          <th>Customer Name</th>
          <th>No. of Items ordered</th>
          <th>Total Amount of the Order</th>
          <th>Status of the Order</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="orderlist">
        
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from "jquery"
export default {
  name: 'HelloWorld',
  data(){
    return{
         itemnames:[
           {
           "id":1,
           "name":"Peppy Paneer",
           "price":200,
           "path":'../assets/PeppyPaneer.jfif'
           },
           {
            "id":2,
           "name":"Mexican Green Wave",
           "price":150,
           "path":'../assets/mexican.jpg'
           },
           {
           "id":3,
           "name":"Double Cheese Margherita",
           "price":340,
           "path":'../assets/doublechese.jfif'
           },
           {
            "id":4,
           "name":"Deluxe Veggie",
           "price":400,
           "path":'../assets/Veggie.jfif'        
           }],
      orderlist:[
        {
         "customerid":1,
         "customername":"Theja Sree",
         "totalitems":10,
         "totalamt":5000,
         "statustrack":"Order Received", 
         "customeraddress":'Kannappar Thidal, Periyamet, Chennai, Tamil Nadu 600003',
         "status":["Order Received","Preparing","Ready to serve"]
        },
        {
         "customerid":2,  
         "customername":"Zeeshan Fathima",
         "totalitems":10,
         "totalamt":5000,
         "statustrack":"Order Received",
         "customeraddress":'Kannappar Thidal, Periyamet, Chennai, Tamil Nadu 600003',
         "status":["Order Received","Preparing","Ready to serve"]
        },
        {
         "customerid":3,
         "customername":"Kesavulu Sugumar",
         "totalitems":10,
         "totalamt":5000,
         "statustrack":"Order Received",
         "customeraddress":'Kannappar Thidal, Periyamet, Chennai, Tamil Nadu 600003',
         "status":["Order Received","Preparing","Ready to serve"]
        },
        {
         "customerid":4,
         "customername":"Sarsveshwaran",
         "totalitems":10,
         "totalamt":5000,
         "statustrack":"Order Received",
         "customeraddress":'Kannappar Thidal, Periyamet, Chennai, Tamil Nadu 600003',
         "status":["Order Received","Preparing","Ready to serve"]
        },
        {
         "customerid":5,
         "customername":"Arun karthik",
         "totalitems":10,
         "totalamt":5000,
         "statustrack":"Order Received",
         "customeraddress":'Kannappar Thidal, Periyamet, Chennai, Tamil Nadu 600003',
         "status":["Order Received","Preparing","Ready to serve"]
        },
        {
         "customerid":6,
         "customername":"Radhakrishnan",
         "totalitems":10,
         "totalamt":5000,
         "statustrack":"Order Received",
         "customeraddress":'Kannappar Thidal, Periyamet, Chennai, Tamil Nadu 600003',
         "status":["Order Received","Preparing","Ready to serve"]
        },
        {
         "customerid":7,
         "customername":"Kavitha Anjali",
         "totalitems":10,
         "totalamt":5000,
         "statustrack":"Order Received",
         "customeraddress":'Kannappar Thidal, Periyamet, Chennai, Tamil Nadu 600003',
         "status":["Order Received","Preparing","Ready to serve"]
        },
        {
         "customerid":8,
         "customername":"Darsith Jain",
         "totalitems":10,
         "totalamt":5000,
         "statustrack":"Order Received",
         "customeraddress":'Kannappar Thidal, Periyamet, Chennai, Tamil Nadu 600003',
         "status":["Order Received","Preparing","Ready to serve"]
        },
        {
         "customerid":9,
         "customername":"Selva Murugan",
         "totalitems":10,
         "totalamt":5000,
         "statustrack":"Order Received",
         "customeraddress":'Kannappar Thidal, Periyamet, Chennai, Tamil Nadu 600003',
         "status":["Order Received","Preparing","Ready to serve"]
        },
        ],
    }
  },
  mounted(){
    this.orderitems();
    var this_=this;
    $(document).ready(function() {
      $('.ordertr').on('click', function(e) {
        e.stopPropagation();
        if(e.target.className=="ordertd"){
        $(".order").empty();
        var id=e.currentTarget.id.split("_")[1];
        var textval='';
        textval =`<td colspan=5>
        <div class="tracking">
            <div class="title">Tracking Order</div>
        </div>
        <div class="progress-track">
            <ul id="progressbar">
                <li class="step0 active" id="step1">Order Received</li>
                <li class="step0 text-center" id="step2">Preparing</li>
                <li class="step0 text-right" id="step3">Ready to serve</li>
            </ul>
        </div>
        <div class="customername">`+this_.orderlist[id-1].customername+`</div>
        <div>`+this_.orderlist[id-1].customeraddress+`</div>
        <div class="row justify-content-center" id="orderitems_`+id+`"><table>
        <thead>
        <tr>
        <td>S.no</td>
        <td>Item Name</td>
        <td>Item Price</td></tr></thead><tbody>`;
        this_.itemnames.forEach(function(val) { 
        textval+=` <tr>
        <td>`+val.id+`</td>
        <td>`+val.name+`</td>
        <td>`+val.price+`</td>
        </tr>`;
        });
       textval+=`<tr><td colspan=2 style="text-align:end;padding-right:30px;">Total Amount</td>
       <td style="text-align:end;padding-right:30px;">`+this_.orderlist[id-1].totalamt+`</td></tr></tbody></table></div>
        <div></div>
        </td>`;
         $("#order_"+id).empty();
        $("#order_"+id).append(textval);
        }
    });
});
  },
  methods:{
  orderitems(){         // displaying order list items 
    var cont='';
    this.orderlist.forEach(element => {
      cont+=`<tr class="ordertr" id="ordertr_`+element.customerid+`">
      <td class="ordertd" >`+element.customername+`</td>
      <td class="ordertd" >`+element.totalitems+`</td>
      <td class="ordertd" >`+element.totalamt+`</td>
      <td class="ordertd" ><p class="statustrack" id="status_`+element.customerid+`">`+element.statustrack+`</p></td>
      <td class="dropdown"><select class="form-control statusupdate" id="`+element.customerid+`">`;
      element.status.forEach(function(val) { 
      cont+=` <option value="`+val+`">`+val+`</option>`;
      });
      cont+=`</select></tr><tr class="order" id="order_`+element.customerid+`"></tr>`;
    });
    $("#orderlist").append(cont);

    $(".statusupdate").on('change',function(e){    // change event for changing status background color
      e.stopPropagation();
      var optionval=$("#"+e.currentTarget.id).val();
      $("#status_"+e.currentTarget.id).text(optionval);  
        if (optionval == 'Order Received') {
          $("#step2").removeClass('active');
          $("#step3").removeClass('active');
          $("#status_"+e.currentTarget.id).css({'background':'#ffb3b3','border':'1px solid #dc3545b3'});
        }
        else if (optionval == 'Preparing') {
          $("#step2").addClass('active');
          $("#step3").removeClass('active');
          $("#status_"+e.currentTarget.id).css({'background':'#85e085','border':'1px solid #28a745'});
        }
        else if (optionval == 'Ready to serve') {
          $("#step2").addClass('active');
          $("#step3").addClass('active');
          $("#status_"+e.currentTarget.id).css({'background':'#b3ccff','border':'1px solid #007bff'});
        }
    })
  },
  
  }
}
</script>

<style >
.hello{
  padding: 0 40px;
}
.table td{
border: none  !important;
margin-bottom: none;
}
.table thead th{
border: none  !important;
}
.ordertr{
box-shadow: 0 1px 4px #5a5858!important;
background: #ffffff;
}
.order{
  height: 10px;
}
.taskhead{
font-size: 30px;
font-family: system-ui;
font-weight: 500;
}
.statustrack{
background: #ffb3b3;
border: 1px solid #dc3545b3;
padding: 3px;
font-weight: 500;
border-radius: 15px;
}
.statusupdate{
font-size: 14px !important;
}
.customername{
  font-weight: bolder;
    font-size: 16px;
}

#progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    color: rgb(252, 103, 49);
    padding-left: 0px;
    margin-top: 30px;
}

#progressbar li {
    list-style-type: none;
    width: 33%;
    float: left;
    position: relative;
    font-weight: 400;
    color: rgb(160, 159, 159)
}

#progressbar #step1:before {
    content: "";
    color: rgb(252, 103, 49);
    width: 10px;
    height: 10px;
    margin-left: 0px !important
}

#progressbar #step2:before {
    content: "";
    color: #fff;
    width: 10px;
    height: 10px;
    margin-left: 32%
}

#progressbar #step3:before {
    content: "";
    color: #fff;
    width: 10px;
    height: 10px;
    margin-right: 32%
}

#progressbar li:before {
    line-height: 29px;
    display: block;
    font-size: 12px;
    background: #ddd;
    border-radius: 50%;
    margin: auto;
    z-index: -1;
    margin-bottom: 10px;
}

#progressbar li:after {
    content: '';
    height: 3px;
    background: #ddd;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 3px;
    z-index: 1
}

.progress-track {
    padding: 0 8%
}

/* #progressbar li:nth-child(2):after {
    margin-right: auto
}

#progressbar li:nth-child(1):after {
    margin: auto
} */

#progressbar li:nth-child(3):after {
    float: left;
    width: 68%
}

#progressbar li.active {
    color: black
}

#progressbar li.active:before,
#progressbar li.active:after {
    background: rgb(252, 103, 49)
}
</style>
