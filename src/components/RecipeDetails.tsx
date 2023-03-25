import React, { useMemo } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { Recipe } from '../types';

type RecipeDetailsProps = {
  recipe: Recipe;
};

export function RecipeDetails({ recipe }: RecipeDetailsProps): JSX.Element {
  const estimatedTimeInMinutes = useMemo(
    () => recipe.timers.reduce((acc, timer) => acc + timer),
    [recipe],
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.imageURL }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title}>{recipe.name}</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredientes</Text>
          <FlatList
            data={recipe.ingredients}
            keyExtractor={(ingredient) => ingredient.name}
            renderItem={({ item }) => (
              <Text>
                {item.quantity} of {item.name}
              </Text>
            )}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Modo de Preparo</Text>
          <FlatList
            data={recipe.steps}
            keyExtractor={(step) => step}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tempo de Preparo</Text>
          <Text>{estimatedTimeInMinutes} minutos</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  image: {
    height: 200,
    width: '100%',
  },
  body: {
    paddingHorizontal: 12,
    paddingTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    marginTop: 24,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
