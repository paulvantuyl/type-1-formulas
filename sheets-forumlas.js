/* Calculator Settings
    Target: B1:90 C1:120
    ISF:    B2:1  C2:35
    CHO:    B3:1  C3:8
    Basal:  22
    Using $ locks a value in when extending/dragging a formula across multiple
    cells.

    Calculator cells, start in row 2 due to headings
    A: Date
    B: BG (Blood glucose reading)
    C: CHO (Grams of carbohydrates intended for ingestion)
    D: Calculated units column for fast-acting insulin
*/

// Current calculator forumula
=
IF( AND(ISBLANK(B2)=true,ISBLANK(C2)=true) , "",
IF( B2>Settings!C$1 , ((B2-Settings!C$1)/Settings!C$2)+(C2/Settings!C$3),
IF( B2<Settings!B$1 , ((B2-Settings!B$1)/Settings!C$2)+(C2/Settings!C$3),
IF( AND(B2>=Settings!B$1,B2<=Settings!C$1) , C2/Settings!C$3))))

// Old formula
=IF( (B2>Settings!C$1) , ((B2-Settings!C$1)/Settings!C$2+(C2/Settings!C$3)) , (((B2-Settings!B$1)/Settings!C$2)+(C2/Settings!C$3)))
