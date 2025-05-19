import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
    marginTop: 10,
  },
  header: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#16a34a", // Green color or any other
    fontWeight: "bold",
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
  },
});

const BillDocument = ({ cartItems, totalAmount }) => {
  const currentDate = new Date().toLocaleString();

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.header}>GrooFi Payment Summary</Text>
        <Text>Date: {currentDate}</Text>
        <View style={styles.section}>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.bold}>Total: ${totalAmount}</Text>
      </Page>
    </Document>
  );
};

export default BillDocument;
