import React, { useMemo, useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { Recipe } from '../types';
import { RecipeDetails } from './RecipeDetails';

type RecipeItemProps = {
  recipe: Recipe;
};

export function RecipeItem({ recipe }: RecipeItemProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const estimatedTimeInMinutes = useMemo(
    () => recipe.timers.reduce((acc, timer) => acc + timer),
    [recipe],
  );

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <View>
      <Pressable style={styles.container} onPress={handleOpenModal}>
        <Image source={{ uri: recipe.imageURL }} style={styles.image} />
        <View style={styles.body}>
          <Text style={styles.title}>{recipe.name}</Text>
          <View style={styles.timer}>
            <Text style={styles.timerLabel}>Tempo de Preparo: </Text>
            <Text style={styles.timerValue}>
              {estimatedTimeInMinutes} minutos
            </Text>
          </View>
        </View>
      </Pressable>
      <Modal
        visible={isModalOpen}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <RecipeDetails recipe={recipe} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#555',
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  body: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  timer: {
    flexDirection: 'row',
  },
  timerLabel: {
    fontSize: 12,
    color: '#666',
  },
  timerValue: {
    fontSize: 12,
    color: '#666',
  },
});
