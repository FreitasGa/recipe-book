import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Fuse from 'fuse.js';

import { recipes } from '../assets/recipes';
import { RecipeList } from '../components/RecipeList';
import { Recipe } from '../types';

export function Home(): JSX.Element {
  const fuse = new Fuse<Recipe>(recipes, {
    threshold: 0.3,
    keys: ['name'],
  });

  const [search, setSearch] = useState<string>('');

  const filteredRecipes = fuse.search(search).map((result) => result.item);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Receitas</Text>
        <TextInput
          style={styles.headerInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <View style={styles.body}>
        <RecipeList recipes={search.length > 0 ? filteredRecipes : recipes} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 12,
    paddingTop: 24,
    gap: 12,
  },
  headerTitle: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerInput: {
    borderRadius: 5,
    color: '#000',
    fontSize: 16,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 12,
    borderColor: '#555',
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  body: {
    height: '100%',
    flex: 1,
    marginBottom: 12,
  },
});
