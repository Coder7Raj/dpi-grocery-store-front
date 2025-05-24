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
    marginBottom: 10,
    color: "#16a34a",
    fontWeight: "bold",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 10,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  rightAlign: {
    textAlign: "right",
  },
});

const BillDocument = ({ cartItems, totalAmount }) => {
  const currentDate = new Date().toLocaleString();

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.header}>GrooFi Payment Summary</Text>
        <Text>Date: {currentDate}</Text>

        <View style={styles.divider} />

        <View style={styles.section}>
          {cartItems?.map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <Text>
                {item.name} (x{item.quantity})
              </Text>
              <Text>${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        <View style={styles.itemRow}>
          <Text style={styles.bold}>Total:</Text>
          <Text style={[styles.bold, styles.rightAlign]}>
            ${totalAmount.toFixed(2)}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default BillDocument;
