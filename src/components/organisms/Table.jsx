import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  // Td,
  TableContainer
  // Badge
} from '@chakra-ui/react';

const Table = ({ headers, items, keys }) => {
  return (
    <TableContainer background="#f9f9f9" borderRadius="md">
      <ChakraTable variant="simple">
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={`${header}-${index}`}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {/* {items.map((item) => (
              <Tr key={item._id}>
                <Td>{item.firstName}</Td>
                <Td>{item.lastname}</Td>
                <Td>N°{item.membership}</Td>
                <Td>
                  <Badge color="green" borderRadius={6} p={2}>
                    {item.status}
                  </Badge>
                </Td>
              </Tr>
            ))} */}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
