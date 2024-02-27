export const jobPositionInputs = [
    {
      label: "Title",
      value: "",
      type: "text",
      key: "title",
      required: true,
      placeholder: "Title",
    },
    {
      label: "Code",
      value: "",
      type: "text",
      key: "code",
      required: true,
      placeholder: "Code",
    },
    {
      type: "toggler",
      key: "job_status",
      required: true,
      onActive: "Active",
      onDeactive: "Deactive",
    },
    {
      label: "Content",
      value: "",
      type: "textarea",
      key: "description",
      required: true,
      placeholder: "5000 character max",
    },
  ];

  export const documentCategoryInputs=[
    {
        label: "Title",
        value: "",
        type: "text",
        key: "title",
        required: true,
        placeholder: "Title",
      },
      {
        label: "Code",
        value: "",
        type: "text",
        key: "code",
        required: true,
        placeholder: "Code",
      },
      {
        label: "Description",
        value: "",
        type: "textarea",
        key: "description",
        required: true,
        placeholder: "Description",
      },
  ]

  export const leaveTypeInputs=[
    {
        label: "Code",
        value: "",
        type: "text",
        key: "code",
        required: true,
        placeholder: "Code",
      },
      {
        label: "Description",
        value: "",
        type: "text",
        key: "description",
        required: true,
        placeholder: "Description",
      },
      {
        type: "toggler",
        key: "status",
        onActive: "Active",
        onDeactive: "Deactive",
      },
      {
        label: "Day Count",
        value: "",
        type: "text",
        key: "daycount",
        required: true,
        placeholder: "Day Count",
      },
      {
        type: "toggler",
        key: "paid_leave",
        onActive: "Paid Leave",
        onDeactive: "Paid Leave",
      },
      {
        type: "toggler",
        key: "negative_balance",
        onActive: "Allow Negative Balance",
        onDeactive: "Allow Negative Balance",
      },
      {
        type: "toggler",
        key: "reason_required",
        onActive: "Reason Required",
        onDeactive: "Reason Required",
      },
      {
        type: "toggler",
        key: "attachment_required",
        onActive: "Attachment Required",
        onDeactive: "Attachment Required",
      },
    ];
    export const departmentInputs = [
        {
          label: "Enter Department Name",
          value: "",
          type: "text",
          key: "name",
          required: true,
          placeholder: "Enter Department Name",
        },
        {
          label: "Enter Code",
          value: "",
          type: "text",
          key: "code",
          required: true,
          placeholder: "Enter Code",
        },
      ];
    export const entitlementInputs = [
        {
          label: "Type",
          value: "",
          type: "text",
          key: "type",
          required: true,
          placeholder: "Select Leave Type",
        },
        {
          label: "Earning Policy",
          value: "",
          type: "text",
          key: "earning_policy",
          required: true,
          placeholder: "Select Earning Policy",
        },
        {
          label: "Earning Start",
          value: "",
          type: "date",
          key: "earningstart",
          required: true,
          placeholder: "YYYY-MM-DD",
        },
        {
          label: "Valid Until",
          value: "",
          type: "date",
          key: "validuntil",
          required: true,
          placeholder: "YYYY-MM-DD",
        },
        {
          label: "Select Year",
          value: "",
          type: "select",
          key: "year",
          required: true,
          placeholder: "Select Year",
        },
        {
          label: "Entitled Day",
          value: "",
          type: "text",
          key: "entitled_day",
          required: true,
          placeholder: "Enter Entitled Days",
        },
      ];
      export   const noticeInput = [
        {
          label: "Title",
          value: "",
          type: "text",
          key: "title",
          required: true,
          placeholder: "Title",
        },
        {
          label: "Date",
          value:'',
          type: "date",
          key: "date",
          required: true,
        },
        {
          label: "Notify Employee",
          value: "",
          type: "toggler",
          key: "notify_employee",
          required: true,
        },
        {
          label: "Attachment",
          value: "",
          type: "choosefile",
          key: "attachment",
          required: true,
        },
        {
          label: "Content",
          value: "",
          type: "textarea",
          key: "description",
          required: true,
          placeholder: "5000 character max",
        },
      ];
      export const leaveApplicationInput= [
        {
            label:'Entitlement',
            value:'',
            type:'select',
            key:'entitlement',
            required: true,
            placeholder:'Select Entitlement'
          },
          {
            label:'Balance',
            value: '',
            type:'text',
            key:'balance',
            placeholder:'0 days'
          },
          {
            label:'Session',
            value:'',
            type:'select',
            key:'session',
            required: true,
            placeholder:'Session'
          },
        {
            label:'From',
            value:'',
            type:'date',
            key:'dateFrom',
            required: true,
            placeholder:'YYYY-MM-DD',
            width:'50%'
        },
        {
            label:'To',
            value:'',
            type:'date',
            key:'dateTo',
            required: true,
            placeholder:'YYYY-MM-DD',
            width:'50%  '
        },
        {
            label:'Day',
            value: '',
            type:'text',
            key:'day',
            required: true,
            placeholder:'0'
          },
        {
            label:'Attachment 1',
            value: '',
            type:'choosefile',
            key:'attachment1',
            required: true,
            width:'50%'
          },
        {
            label:'Attachment 2',
            value: '',
            type:'choosefile',
            key:'attachment2',
            required: true,
            width:'50%'
          }, 
        {
            label:'Reason',
            value: '',
            type:'textarea',
            key:'description',
            required: true,
          }, 
          {
            label:'Submission Date',
            value:'',
            type:'date',
            key:'submission_date',
            required: true,
            placeholder:'YYYY-MM-DD'
        },
        {
          type:'toggler',
          key:'Notify_Employee_After_Final_Approval',
          onActive:'Notify Employee After Final Approval',
          onDeactive:'Notify Employee After Final Approval'
      },
        {
          label:'Remarks',
          value: '',
          type:'textarea',
          key:'remarks',
          required: true,
        }, 
        ]
        export const holidayInputs=[
            {
                label: "Name",
                value: "",
                type: "text",
                key: "name",
                required: true,
                placeholder: "Name",
              },
              {
                label: "From",
                value: "",
                type: "date",
                key: "fromdate",
                required: true,
                placeholder: "YYYY-MM-DD",
                width: "50%",
              },
              {
                label: "To",
                value: "",
                type: "date",
                key: "todate",
                required: true,
                placeholder: "YYYY-MM-DD",
                width: "50%",
              },
              {
                label: "Description",
                value: "",
                type: "textarea",
                key: "description",
                required: true,
                placeholder: "Description",
              },
        ]
        export const  discussionInput = [
            {
              label: "Title",
              value: "",
              type: "text",
              key: "title",
              required: true,
              placeholder: "Title",
            },
            {
              label: "Date",
              value:'',
              type: "date",
              key: "date",
              required: true,
            },
            {
              label: "Notify Employee",
              value: "",
              type: "toggler",
              key: "notifyemployee",
              required: true,
            },
            {
              label: "Attachment",
              value: "",
              type: "choosefile",
              key: "attachment",
              required: true,
            },
            {
              label: "Content",
              value: "",
              type: "textarea",
              key: "description",
              required: true,
              placeholder: "5000 character max",
            },
          ];