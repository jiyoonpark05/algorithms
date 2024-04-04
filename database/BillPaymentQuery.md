# Bill Payment Query 
A database of a small retail store contains customer billing records stored in two tables, FAMILIES and BILLS. Determine the maximum AMOUNT in the BILLS table, then print the NAMEs of all customers who have a bill of that amount. The names may be in any order.

## Schema 
- FAMILIES

| Name    | Type   | Description    |
| ------- | ------ |--------------- |
| NAME    | STRING | Customer name  |
| BILL_ID | STRING |relates to BILLD|

- BILLS

| Name    | Type    | Description      |
| ------- | ------- |----------------- |
| ID      | STRING  | ID of the bill   |
| AMOUNT  | INTEGER |Amount of the bill|


## Sample Data Tables 
- FAMILIES

| NAME    | BILL_ID             |
| --------| ------------------- |
| Julia   | sadasdasdasdasdasd  |
| Samantha| asdasdasdasdsdfsf   |
| John    | sdgsdfaweqwrsegfsdg |

- BILLS

| BILL_ID              | AMOUNT |
| ---------------------| ------ |
| sadasdasdasdasdasd   | 1000   |
| asdasdasdasdsdfsf    | 500    |
| sdgsdfaweqwrsegfsdg  | 1000   |

## Sample OUTPUT
Samantha, John

### solve

```sql
SELECT FAM.NAME
FROM FAMILIES FAM
INNER JOIN BILLS BILL 
ON FAM.BILLD = BILL.ID
WHERE BILL.AMOUNT = (
      SELECT MAX(AMOUNT)
      FROM BILLS
    );
```